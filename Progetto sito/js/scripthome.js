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
