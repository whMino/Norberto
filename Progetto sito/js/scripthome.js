var reader = new XMLHttpRequest();


var alterna=0;
function menu()
{
    if(alterna==0){
        document.getElementById("menu").style.left = 0;
        alterna=1;
    }else{
        document.getElementById("menu").style.left = "";
        alterna=0;
    }
    
}

function test()
{
    alert(localStorage.getItem("Local"));
    alert(localStorage.getItem("Numpref"));
    alert(localStorage.getItem("Pref1"));
    alert(localStorage.getItem("Pref2"));
    alert(localStorage.getItem("Pref3"));
    alert(localStorage.getItem("Pref4"));
    alert(localStorage.getItem("Pref5"));
}
