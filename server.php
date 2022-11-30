<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With");
$filePath = './data.json';
$textFile = file_get_contents($filePath);
//associo alla variabile todos l'array preso dal json
$todos = json_decode($textFile);

//controllo se è settato il nuovo elemento e se l'azione è di aggiunta
if(isset($_POST['newTodo']) && isset($_GET['add'])){
    //creo il nuovo oggetto lo pusho e sovrascrivo il file
    $newTodo = [
        'testo' => $_POST['newTodo'],
        'done' => false
    ];
    array_unshift($todos,$newTodo);
    file_put_contents($filePath, json_encode($todos));
    //controllo se è settato l'indice e se l'azione è di segnare task completata
} elseif(isset($_POST['index']) && isset($_GET['done'])){
    //modifico il valore del done nell'oggetto corretto e sovrascrivo il file
    $i = intval($_POST['index']);
    $todos[$i]->done = !$todos[$i]->done;
    file_put_contents($filePath, json_encode($todos));
    //controllo se è settato l'indice e se l'azione è di rimuovere la task
}elseif(isset($_POST['index']) && isset($_GET['delete'])){
    //tolgo l'elemento corretto e sovrascrivo il file
    $i = intval($_POST['index']);
    array_splice($todos,$i,1);
    file_put_contents($filePath, json_encode($todos));

}else{

    header('Content-Type: application/json');
    echo json_encode($todos);
};
