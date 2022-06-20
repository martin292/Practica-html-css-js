const btn = document.querySelector('.drop-btn');
const menu = document.querySelector('.drop-menu');

function displayIsNone(){
    return menu.style.display == 'none';
}
function setDisplay(type){
    menu.style.display = type;
}

btn.addEventListener('click', ()=>{
    (displayIsNone())? setDisplay('block') : setDisplay('none');
});