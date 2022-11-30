<?php 
$todo = $_POST['todo'];

header('Content-Type: application/json');
echo json_encode($todo);