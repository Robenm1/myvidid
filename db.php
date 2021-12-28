<?php

$server = "sql300.epizy.com";
$username = "epiz_29466708";
$password = "f8taZZ8Vi6";
$dbname = "epiz_29466708_contactingstuff";

$conn = mysqli_connect($server, $username, $password, $dbname);

if(!$conn){
    die("Connection Failed:".mysqli_connect_error());
}








?>