function loadAbout(){
    const div = document.createElement('div');
    div.className = 'about-section';
    div.id = 'about';

    const h = document.createElement('h1');
    h.textContent = 'Under construction...';

    div.appendChild(h);

    const content = document.querySelector('.content');
    content.appendChild(div);
}

export default loadAbout;