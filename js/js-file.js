const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p = document.createElement("p");
p.textContent = "Red";
p.style.cssText = "color: red;";

const h3 = document.createElement("h3");
h3.textContent = "Blue";
h3.style.cssText = "color: blue;";


const div = document.createElement("div");
div.setAttribute('style', 'border-color: black; background: pink;');

const h1 = document.createElement("h1");
h1.textContent = "I'm a div"
const meToo = document.createElement("p");
meToo.textContent = "ME TOO";

div.appendChild(h1);
div.appendChild(meToo);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
