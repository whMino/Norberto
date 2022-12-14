<?php
//FINISCI
$user = $_POST["textuser"];
$password = $_POST["textpw"];
$valore = $_POST["Valore"];

if($valore == "Registra")
{
    $myfile = fopen("../file esterni/Utenti.txt","a") or die("Non c'è");
    fwrite($myfile, $user.";".$password.";Italia;Vuoto;"."\n");
    fclose($myfile);
}
header("location: ../html/home.html");

?>