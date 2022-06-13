document.addEventListener("DOMContentLoaded", function(){
    let Hamb = document.querySelector(".HambMobile");
    let NavigCont = document.querySelector(".HeadNavigMobile");
    NavigCont.style.visibility = "hidden";
    Hamb.addEventListener('touchstart', checkVisib);
    function checkVisib(){
        if(NavigCont.style.visibility == 'hidden'){
            NavigCont.style.visibility = 'visible';
        }
        else{
            NavigCont.style.visibility = 'hidden';
        }
    }
})