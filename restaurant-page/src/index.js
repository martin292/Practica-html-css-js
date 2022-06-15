import loadHome from "./home";
import loadNavBar from "./navBar";
import loadMenu from "./menu";
import loadFooter from "./footer";
import loadAbout from "./about";
import loadContact from "./contact";

loadNavBar();
loadHome();
loadMenu();
loadAbout();
loadContact();
loadFooter();

const pizzaBtn = document.querySelector('#pizza');
const pastaBtn = document.querySelector('#pasta');
const starterBtn = document.querySelector('#starter');

const menuPizza = document.querySelector('#menu-pizza');
const menuPasta = document.querySelector('#menu-pasta');
const menuStarter =  document.querySelector('#menu-starter');

pizzaBtn.addEventListener('mouseover', ()=> {
    if(pizzaBtn.style.backgroundColor != 'red'){
        pizzaBtn.style.backgroundColor = 'red';
    }
});
pizzaBtn.addEventListener('mouseout', ()=> {
    if(pizzaBtn.style.backgroundColor == 'red' && menuPizza.style.display != 'block'){
        pizzaBtn.style.backgroundColor = 'black';
    }
});

pastaBtn.addEventListener('mouseover', ()=> {
    if(pastaBtn.style.backgroundColor != 'red'){
        pastaBtn.style.backgroundColor = 'red';
    }
});
pastaBtn.addEventListener('mouseout', ()=> {
    if(pastaBtn.style.backgroundColor == 'red' && menuPasta.style.display != 'block'){
        pastaBtn.style.backgroundColor = 'black';
    }
});

starterBtn.addEventListener('mouseover', ()=> {
    if(starterBtn.style.backgroundColor != 'red'){
        starterBtn.style.backgroundColor = 'red';
    }
});

starterBtn.addEventListener('mouseout', ()=> {
    if(starterBtn.style.backgroundColor == 'red' && menuStarter.style.display != 'block'){
        starterBtn.style.backgroundColor = 'black';
    }
});

pizzaBtn.addEventListener('click', () => {
    menuPizza.style.display = 'block';
    menuPasta.style.display = 'none';
    menuStarter.style.display = 'none';

    pizzaBtn.style.backgroundColor = 'red';
    pastaBtn.style.backgroundColor = 'black';
    starterBtn.style.backgroundColor = 'black';
});

pastaBtn.addEventListener('click', () => {
    menuPizza.style.display = 'none';
    menuPasta.style.display = 'block';
    menuStarter.style.display = 'none';

    pizzaBtn.style.backgroundColor = 'black';
    pastaBtn.style.backgroundColor = 'red';
    starterBtn.style.backgroundColor = 'black';
});

starterBtn.addEventListener('click', () => {
    menuPizza.style.display = 'none';
    menuPasta.style.display = 'none';
    menuStarter.style.display = 'block';

    pizzaBtn.style.backgroundColor = 'black';
    pastaBtn.style.backgroundColor = 'black';
    starterBtn.style.backgroundColor = 'red';
});