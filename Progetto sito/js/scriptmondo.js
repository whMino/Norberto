var reader = new XMLHttpRequest();
let stringa = "";
let percorsofile = "../../file esterni/Mondo/" + localStorage.getItem("Local") + "/" + "Giornali.txt";

function inizio()
{
    Leggi();
    let righe = stringa.split("\n");
    let numerogiornali = 4; //Numero di giornali da caricare
    for(let i = 0; i < numerogiornali; i++)
    {
        if(i < righe.length -1)
        {
            let valori = righe[i].split(";");
            let j = i+1;
            let idgio = "Giornale" + j;
            let idimm = "Imm" + j;
            document.getElementById(idgio).innerHTML = valori[0];
            document.getElementById(idimm).src = valori[1];
            document.getElementById(idgio).setAttribute("name", i);
        }
    }
}

function Cliccato1()
{
    localStorage.setItem("Riga", document.getElementById('Giornale1').getAttribute("name"));
    localStorage.setItem("Percor", percorsofile);
}
function Cliccato2()
{
    localStorage.setItem("Riga", document.getElementById('Giornale2').getAttribute("name"));
    localStorage.setItem("Percor", percorsofile);
}
function Cliccato3()
{
    localStorage.setItem("Riga", document.getElementById('Giornale3').getAttribute("name"));
    localStorage.setItem("Percor", percorsofile);
}
function Cliccato4()
{
    localStorage.setItem("Riga", document.getElementById('Giornale4').getAttribute("name"));
    localStorage.setItem("Percor", percorsofile);
}

function Leggi()
{
    reader.open('get', percorsofile, false); 
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