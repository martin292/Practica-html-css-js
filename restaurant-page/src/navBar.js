function createAElement(ref, text){
    const a = document.createElement('a');
    a.href = ref;
    a.textContent = text;
    return a;
}

function loadNavBar(){
    const div = document.createElement('div');
    div.className = 'navBar';

    div.appendChild(createAElement('#home', 'Restaurant'));
    div.appendChild(createAElement('#menu', 'Menu'));
    div.appendChild(createAElement('#about', 'About'));
    div.appendChild(createAElement('#contact', 'Contact'));
    
    const content = document.querySelector('.content');

    content.appendChild(div);
}

export default loadNavBar;