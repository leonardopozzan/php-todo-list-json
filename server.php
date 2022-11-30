<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With");
$textFile = file_get_contents('./data.json');
$todos = json_decode($textFile);

if(isset($_POST['newTodo'])){
    $newTodo = [
        'testo' => $_POST['newTodo'],
        'done' => false
    ];
    array_unshift($todos,$newTodo);
    file_put_contents('./data.json', json_encode($todos));
} elseif(isset($_POST['index']) && isset($_GET['done'])){
    $i = intval($_POST['index']);
    $todos[$i]->done = !$todos[$i]->done;
    file_put_contents('./data.json', json_encode($todos));
}elseif(isset($_POST['index']) && isset($_GET['delete'])){
    var_dump('sono qui');
    $i = intval($_POST['index']);
    array_splice($todos,$i,1);
    file_put_contents('./data.json', json_encode($todos));
}else{
    header('Content-Type: application/json');
    echo json_encode($todos);
};
