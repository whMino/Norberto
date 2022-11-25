var reader = new XMLHttpRequest();
let stringa = "";

function Salva()
{
    var località = document.getElementById("locali").value;
    localStorage.setItem("Local", località);
    alert("Località salvata correttamente");
}

function Inizio()
{
    document.getElementById("locali").value = localStorage.getItem("Local");
}

function Preferenze()
{
    alert("Preferenza 1: "+localStorage.getItem("Pref1"));
    alert("Preferenza 2: "+localStorage.getItem("Pref2"));
    alert("Preferenza 3: "+localStorage.getItem("Pref3"));
    alert("Preferenza 4: "+localStorage.getItem("Pref4"));
    alert("Preferenza 5: "+localStorage.getItem("Pref5"));
}

function Aggiungi()
{
    var preferenza = document.getElementById("textpreferenza").value;
    let num = localStorage.getItem("Numpref");
    if(preferenza != "")
    {
        if(!localStorage.getItem("Pref1").includes(preferenza) && !localStorage.getItem("Pref2").includes(preferenza) && !localStorage.getItem("Pref3").includes(preferenza) && !localStorage.getItem("Pref4").includes(preferenza) && !localStorage.getItem("Pref5").includes(preferenza))
        {
            if(num==0)
            {
                localStorage.setItem("Pref1", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
            }
            else if(num==1)
            {
                localStorage.setItem("Pref2", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
            }
            else if(num==2)
            {
                localStorage.setItem("Pref3", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
            }
            else if(num==3)
            {
                localStorage.setItem("Pref4", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
            }
            else if(num==4)
            {
                localStorage.setItem("Pref5", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
            }
            else if(num==5)
            {
                alert("Esistono già 5 preferenze");
            }
        }
        else
        {
            alert("Prefenza già esistente");
        }
    }
    else
    {
        alert("Campo vuoto");
    }
}

function Rimuovi()
{
    var preferenza = document.getElementById("textpreferenza").value;
    let num = localStorage.getItem("Numpref")-1;
    if(localStorage.getItem("Pref1").includes(preferenza))
    {
        localStorage.setItem("Pref1", localStorage.getItem("Pref2"));
        localStorage.setItem("Pref2", localStorage.getItem("Pref3"));
        localStorage.setItem("Pref3", localStorage.getItem("Pref4"));
        localStorage.setItem("Pref4", localStorage.getItem("Pref5"));
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
    }
    else if(localStorage.getItem("Pref2").includes(preferenza))
    {
        localStorage.setItem("Pref2", localStorage.getItem("Pref3"));
        localStorage.setItem("Pref3", localStorage.getItem("Pref4"));
        localStorage.setItem("Pref4", localStorage.getItem("Pref5"));
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
    }
    else if(localStorage.getItem("Pref3").includes(preferenza))
    {
        localStorage.setItem("Pref3", localStorage.getItem("Pref4"));
        localStorage.setItem("Pref4", localStorage.getItem("Pref5"));
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
    }
    else if(localStorage.getItem("Pref4").includes(preferenza))
    {
        localStorage.setItem("Pref4", localStorage.getItem("Pref5"));
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
    }
    else if(localStorage.getItem("Pref5").includes(preferenza))
    {
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
    }
    else
    {
        alert("Prefenza non trovata");
    }
}