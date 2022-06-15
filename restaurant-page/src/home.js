function createTitle() {
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Restaurant page';
    return title;
}
function createDescription() {
    const desc = document.createElement('p');
    desc.id = 'description';
    desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut placerat congue leo at venenatis. Donec eleifend pretium aliquam. Cras faucibus lorem at gravida euismod.Sed dictum ultrices aliquam.Aenean in eros id orci mollis finibus nec nec dolor. Integer tincidunt elementum nunc, sed tempor turpis egestas vel.Morbi bibendum tristique commodo. Quisque ligula ante, maximus sed ultricies nec, cursus quis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.Nulla tincidunt neque tortor. Sed sed sollicitudin ex, at commodo tortor.'
    return desc;
}
function createMenuButton(){
    const btn = document.createElement('button');
    btn.className = 'menu-btn';
    btn.textContent = 'Menu';
    return btn;
}

function loadHome(){
    const div = document.createElement('div');
    const content = document.querySelector('.content');

    div.id = 'home';

    div.appendChild(createTitle());
    div.appendChild(createDescription());
    //div.appendChild(createMenuButton());

    content.appendChild(div);
}

export default loadHome;