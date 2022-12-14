var reader = new XMLHttpRequest();
let stringa = "";

function Salva()
{
    var località = document.getElementById("locali").value;
    localStorage.setItem("Local", località);
    document.getElementById('Valore').value = "Local:"+localStorage.setItem("Local");;
    document.getElementById("Form").submit();
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
                let str = localStorage.getItem("Pref1");
                localStorage.setItem("Pref1", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
                document.getElementById('Valore').value = "Agg:"+str+";fine";
                document.getElementById("Form").submit();
            }
            else if(num==1)
            {
                let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2");
                localStorage.setItem("Pref2", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
                document.getElementById('Valore').value = "Agg:"+str+";fine";
                document.getElementById("Form").submit();
            }
            else if(num==2)
            {
                let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2")+";"+localStorage.getItem("Pref3");
                localStorage.setItem("Pref3", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
                document.getElementById('Valore').value = "Agg:"+str+";fine";
                document.getElementById("Form").submit();
            }
            else if(num==3)
            {
                let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2")+";"+localStorage.getItem("Pref3")+";"+localStorage.getItem("Pref4");
                localStorage.setItem("Pref4", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
                document.getElementById('Valore').value = "Agg:"+str+";fine";
                document.getElementById("Form").submit();
            }
            else if(num==4)
            {
                let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2")+";"+localStorage.getItem("Pref3")+";"+localStorage.getItem("Pref4")+";"+localStorage.getItem("Pref5");
                localStorage.setItem("Pref5", preferenza);
                num++;
                localStorage.setItem("Numpref", num);
                alert("Aggiunto correttamente");
                document.getElementById('Valore').value = "Agg:"+str+";fine";
                document.getElementById("Form").submit();
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
        let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2")+";"+localStorage.getItem("Pref3")+";"+localStorage.getItem("Pref4")+";"+localStorage.getItem("Pref5");
        localStorage.setItem("Pref1", localStorage.getItem("Pref2"));
        localStorage.setItem("Pref2", localStorage.getItem("Pref3"));
        localStorage.setItem("Pref3", localStorage.getItem("Pref4"));
        localStorage.setItem("Pref4", localStorage.getItem("Pref5"));
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
        document.getElementById('Valore').value = "Rim:"+str;
        document.getElementById("Form").submit();
    }
    else if(localStorage.getItem("Pref2").includes(preferenza))
    {
        let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2")+";"+localStorage.getItem("Pref3")+";"+localStorage.getItem("Pref4")+";"+localStorage.getItem("Pref5");
        localStorage.setItem("Pref2", localStorage.getItem("Pref3"));
        localStorage.setItem("Pref3", localStorage.getItem("Pref4"));
        localStorage.setItem("Pref4", localStorage.getItem("Pref5"));
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
        document.getElementById('Valore').value = "Rim:"+str;
        document.getElementById("Form").submit();
    }
    else if(localStorage.getItem("Pref3").includes(preferenza))
    {
        let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2")+";"+localStorage.getItem("Pref3")+";"+localStorage.getItem("Pref4")+";"+localStorage.getItem("Pref5");
        localStorage.setItem("Pref3", localStorage.getItem("Pref4"));
        localStorage.setItem("Pref4", localStorage.getItem("Pref5"));
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
        document.getElementById('Valore').value = "Rim:"+str;
        document.getElementById("Form").submit();
    }
    else if(localStorage.getItem("Pref4").includes(preferenza))
    {
        let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2")+";"+localStorage.getItem("Pref3")+";"+localStorage.getItem("Pref4")+";"+localStorage.getItem("Pref5");
        localStorage.setItem("Pref4", localStorage.getItem("Pref5"));
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
        document.getElementById('Valore').value = "Rim:"+str;
        document.getElementById("Form").submit();
    }
    else if(localStorage.getItem("Pref5").includes(preferenza))
    {
        let str = localStorage.getItem("Pref1")+";"+localStorage.getItem("Pref2")+";"+localStorage.getItem("Pref3")+";"+localStorage.getItem("Pref4")+";"+localStorage.getItem("Pref5");
        localStorage.setItem("Pref5", "");
        alert("Rimosso correttamente");
        localStorage.setItem("Numpref", num);
        document.getElementById('Valore').value = "Rim:"+str;
        document.getElementById("Form").submit();
    }
    else
    {
        alert("Prefenza non trovata");
    }
}