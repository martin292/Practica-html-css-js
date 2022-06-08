const grid = document.querySelector(".grid");

function createColumns(){
    for(let i = 0; i < 16; i++){
        grid.appendChild(createDiv());
    }
}

function createGrid(){
    for(let i = 0; i < 16; i++){
        createColumns();
    }
}

function createDiv(){
    const div = document.createElement('div');

    div.style.height = '20px';
    div.style.width = '20px';
    div.style.border = '1px solid black';

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = 'black';
    });

    return div;
}

grid.addEventListener("mouseover", () => {

});

createGrid();