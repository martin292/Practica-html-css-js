const grid = document.querySelector(".grid");

function createGrid(){
    for(let i = 0; i < 16; i++){
        for(let i = 0; i < 16; i++){
            grid.appendChild(createDiv());
        }
    }
}

function createDiv(){
    const div = document.createElement('div');

    div.style.height = '25px';
    div.style.width = '25px';
    div.style.border = '1px solid grey';

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = 'black';
    });

    return div;
}

createGrid();