function loadContact(){
    const div = document.createElement('div');
    div.className = 'contact-section';
    div.id = 'contact';

    const h = document.createElement('h1');
    h.textContent = 'Under construction...';

    div.appendChild(h);

    const content = document.querySelector('.content');
    content.appendChild(div);
}

export default loadContact;
