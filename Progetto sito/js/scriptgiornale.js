var reader = new XMLHttpRequest();
let stringa = "";

function inizio()
{
    Leggi();
    let riga = localStorage.getItem("Riga");
    let righe = stringa.split("\n");
    let valori = righe[riga].split(";");
    let percorso = valori[2]+"#toolbar=0";
    document.getElementById('pdfframe').src = percorso;
    document.getElementById('titolo').innerHTML = valori[0];
}

function Leggi()
{
    let percorsotxt = localStorage.getItem("Percor");
    reader.open('get', percorsotxt, false); 
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