var reader = new XMLHttpRequest();
let stringa = "";

function Accedi(){
    var username = document.getElementById("textuser").value;
    var pass = document.getElementById("textpw").value;

    if(username != "" && pass != "")
    {
        var controllo = false;
        Leggi();
        righe = stringa.split("\n");

        for(var i = 0; i<righe.length - 1; i++)
        {
            let valori = righe[i].split(";");
            if(username == valori[0] && pass == valori[1])
            {
                controllo = true;
            }
        }

        if(controllo==true)
        {
            alert("Acceduto correttamente");
            location.replace("./home.html");
        }
        else
        {
            alert("Username o password errata");
        }
    }
    else
    {
        alert("Campo mancante");
    }
}

function Registra(){
    var username = document.getElementById("textuser").value;
    var pass = document.getElementById("textpw").value;

    if(username != "" && pass != "")
    {
        var controllo = true;
        Leggi();
        righe = stringa.split("\n");

        for(var i = 0; i<righe.length - 1; i++)
        {
            let valori = righe[i].split(";");
            if(username == valori[0] && pass == valori[1])
            {
                controllo = false;
            }
        }

        if(controllo==true)
        {
            alert("Registrato correttamente");
            location.replace("./home.html");
        }
        else
        {
            alert("Account già esistente");
        }

    }
    else
    {
        alert("Campo mancante");
    }
}

function Leggi()
{
    reader.open('get', '../file esterni/Utenti.txt', false); 
    reader.onreadystatechange = function ()
    {
        if(reader.readyState === 4)
        {
            if(reader.status === 200 || reader.status == 0)
            {
                var allText = reader.responseText; //allText è il file su una stringa
                stringa = allText;
            }
        }
    }
    reader.send(null);
}