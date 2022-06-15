function createMenuTitle(){
    const t = document.createElement('h2');
    t.textContent = 'The Menu';
    return t;
}

function createProduct(name){
    const product = document.createElement('h3');
    product.textContent = name;

    return product;
}
function createIngredients(str){
    const ing = document.createElement('p');
    ing.textContent = str;

    return ing;
}

function createMenuPizza(){
    const div = document.createElement('div');
    div.id = 'menu-pizza';

    div.appendChild(createProduct('Margherita'));
    div.appendChild(createIngredients('Fresh tomatoes, fresh mozzarella, fresh basil'));
    div.appendChild(document.createElement('hr'));

    div.appendChild(createProduct('Formaggio'));
    div.appendChild(createIngredients('Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)'));
    div.appendChild(document.createElement('hr'));

    div.appendChild(createProduct('Chicken'));
    div.appendChild(createIngredients('Fresh tomatoes, mozzarella, chicken, onions'));

    return div;
}
function createMenuPasta(){
    const div = document.createElement('div');
    div.id = 'menu-pasta';

    div.appendChild(createProduct('Lasagna'));
    div.appendChild(createIngredients('Special sauce, mozzarella, parmesan, ground beef'));
    div.appendChild(document.createElement('hr'));

    div.appendChild(createProduct('Ravioli'));
    div.appendChild(createIngredients('Ravioli filled with cheese'));
    div.appendChild(document.createElement('hr'));

    div.appendChild(createProduct('Spaghetti Classica'));
    div.appendChild(createIngredients('Fresh tomatoes, onions, ground beef'));

    return div;
}
function createMenuStarter(){
    const div = document.createElement('div');
    div.id = 'menu-starter';

    div.appendChild(createProduct('Bruschetta'));
    div.appendChild(createIngredients('Bread with pesto, tomatoes, onion, garlic'));
    div.appendChild(document.createElement('hr'));

    div.appendChild(createProduct('Garlic bread'));
    div.appendChild(createIngredients('Grilled ciabatta, garlic butter, onions'));
    div.appendChild(document.createElement('hr'));

    div.appendChild(createProduct('Tomozzarella'));
    div.appendChild(createIngredients('Tomatoes and mozzarella'));

    return div;
}

function createMenuSelector(){
    const div = document.createElement('div');
    div.className = 'menu-selector';

    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');

    a1.id = 'pizza';
    a2.id = 'pasta';
    a3.id = 'starter';

    a1.textContent = 'Pizza';
    a2.textContent = 'Pasta';
    a3.textContent = 'Starter';

    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(a3);

    return div;
}

function createMenu(){
    const div = document.createElement('div');
    div.className = 'menu';

    div.appendChild(createMenuSelector());
    div.appendChild(createMenuPizza());
    div.appendChild(createMenuPasta());
    div.appendChild(createMenuStarter());

    return div;
}

function loadMenu(){
    const menuSection = document.createElement('div');
    menuSection.className = 'menu-section';
    menuSection.id = 'menu';

    menuSection.appendChild(createMenuTitle());
    menuSection.appendChild(createMenu());

    const content = document.querySelector('.content');

    content.appendChild(menuSection);
}

export default loadMenu;