var reader = new XMLHttpRequest();
let stringa = "";

function Salva()
{
    var località = document.getElementById("locali").value;
    localStorage.setItem("Local", località);
    alert("Località salvata correttamente");
}

function Aggiungi()
{
    alert("ciao");
}

function Rimuovi()
{
    let num = localStorage.getItem("Numpref")-1;
    if(num==0)
    {
        localStorage.setItem("Pref1", "");
    }
    if(num==1)
    {
        localStorage.setItem("Pref2", "");
    }
    if(num==2)
    {
        localStorage.setItem("Pref3", "");
    }
    if(num==3)
    {
        localStorage.setItem("Pref4", "");
    }
    if(num==4)
    {
        localStorage.setItem("Pref5", "");
    }
    localStorage.setItem("Numpref", num);
    alert("Tolto l'ultimo");
}