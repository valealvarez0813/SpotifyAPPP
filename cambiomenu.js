/*let titulo=document.getElementById("titulo");
titulo.textContent="BUENAS TARDES";*/
 
window.addEventListener("scroll",cambiarColor);




function cambiarColor(){

    let menu=document.getElementById("menu");

    if(document.body.scrollTop||document.documentElement.scrollTop==0){
        menu.classList.add("bg-dark");
        menu.classList.remove("fondo2");

    }
else{
    menu.classList.add("fondo2");
    menu.classList.remove("bg-dark");
}
}