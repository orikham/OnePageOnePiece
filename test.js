let topArrow = document.getElementById('top-arrow');
let bottomArrow = document.getElementById('bottom-arrow');
let recettes = document.getElementById('recettes');
let transition = 0;


topArrow.addEventListener('click', function(){

    if(transition - 80 <= 2000){
        transition -= 80;

    recettes.style.top = transition + 'px';


    
}
});

bottomArrow.addEventListener('click', function(){
    if(transition + 80 >= 2000){
        transition += 80;

    recettes.style.marginTop = transition + 'px';


    
}
});
