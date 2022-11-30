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
    array_push($todos,$newTodo);
    file_put_contents('./data.json', json_encode($todos));
    header('Content-Type: application/json');
    echo json_encode($todos);
}else{
    header('Content-Type: application/json');
    echo json_encode($todos);
}
