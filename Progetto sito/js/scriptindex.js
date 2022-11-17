var reader = new XMLHttpRequest();

function Accedi(){
    if(document.getElementById("textuser").value != "" && document.getElementById("textpw").value != "")
    {
        var stringa = Leggi();
        alert("Acceduto correttamente");
        //location.replace("./home.html");
    }
    else
    {
        alert("Campo mancante");
    }
}

function Registra(){
    if(document.getElementById("textuser").value != "" && document.getElementById("textpw").value != "")
    {
        alert("Registrato correttamente");
        location.replace("./home.html");
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
                return allText;
            }
        }
    }
    reader.send(null);
}