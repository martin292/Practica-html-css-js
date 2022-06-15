function loadFooter(){
    const div = document.createElement('div');
    div.className = 'footer';
    div.textContent = 'Lorem ipsum';

    const content = document.querySelector('.content');
    content.appendChild(div);
}

export default loadFooter;
