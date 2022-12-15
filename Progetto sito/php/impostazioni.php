<?php
session_start();
$user = "Test";
if(isset($_SESSION["usern"]))
{
    $user = $_SESSION["usern"];
}
$valore = $_POST["Valore"];

$metodo = explode(":", $valore);
$myfile = fopen("../file esterni/Utenti.txt","r") or die("Non c'è");

if($metodo[0]=="Local") //Funziona
{
    $str = "";
    while (($line = fgets($myfile)) !== false) {
        $vett = explode(";", $line);
        if($vett[0] == $user)
        {
            $str = $str.$vett[0].";".$vett[1].";".$metodo[1].";".$vett[3];
        }
        else
        {
            $str = $str.$line;
        }
    }
    fclose($myfile);
    $myfile2 = fopen("../file esterni/Utenti.txt","w") or die("Non c'è");
    fwrite($myfile2, $str);
    fclose($myfile2);
}
else if($metodo[0]=="Agg") //Da finire
{
    $str = "";
    while (($line = fgets($myfile)) !== false) {
        $vett = explode(";", $line);
        if($vett[0] == $user)
        {
            $str = $str.$vett[0].";".$vett[1].";".$metodo[1].";".$vett[3];
        }
        else
        {
            $str = $str.$line;
        }
    }
    fclose($myfile);
    $myfile2 = fopen("../file esterni/Utenti.txt","w") or die("Non c'è");
    fwrite($myfile2, $str);
    fclose($myfile2);
}
else if($metodo[0]=="Rim") //Da finire
{
    $str = "";
    while (($line = fgets($myfile)) !== false) {
        $vett = explode(";", $line);
        if($vett[0] == $user)
        {
            $str = $str.$vett[0].";".$vett[1].";".$metodo[1].";".$vett[3];
        }
        else
        {
            $str = $str.$line;
        }
    }
    fclose($myfile);
    $myfile2 = fopen("../file esterni/Utenti.txt","w") or die("Non c'è");
    fwrite($myfile2, $str);
    fclose($myfile2);
}

header("location: ../html/impostazioni.html");

?>