<?php
$user = $_POST["username"];
$password = $_POST["password"];
$valore = $_POST["Valore"];

if($valore == "Registra")
{
    $myfile = fopen("../file esterni/Utenti.txt","a") or die("Non c'è");
    fwrite($myfile, $user.";".$password.";Italia;Vuoto"."\n");
    fclose($myfile);
}
session_start();
$_SESSION["usern"]=$user;

header("location: ../html/home.html");

?>