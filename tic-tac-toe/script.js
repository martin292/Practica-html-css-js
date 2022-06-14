const gameboard = (() => {
    board = ['', '', '', '', '', '', '', '', ''];

    let play = (p, i) => {
        board[i] = p;
    };

    let getBoard = () => board;

    let reset = () => board = ['', '', '', '', '', '', '', '', ''];

    return { play, reset, getBoard };
})();

const Player = (str) => {
    let name = str;
    return { name };
};

const game = (() => {
    let x = Player('X');
    let o = Player('O');
    let turn = x;
    let over = false;
    let restart = () => {
        turn = x;
        over = false;
    };
    let gameOver = () => over = true;
    let isOver = () => over;
    let nextTurn = () => turn.name;
    let changeTurn = () => {
        if (turn == x) {
            turn = o;
        } else {
            turn = x;
        }
    };
    return { nextTurn, changeTurn, gameOver, isOver, restart }
})();

//------------------------------------------------------------
function getIndex(id) {
    switch (id) {
        case 'cel-0': return 0;
        case 'cel-1': return 1;
        case 'cel-2': return 2;
        case 'cel-3': return 3;
        case 'cel-4': return 4;
        case 'cel-5': return 5;
        case 'cel-6': return 6;
        case 'cel-7': return 7;
        case 'cel-8': return 8;
    }
}

function emptyCel(cel) {
    return cel.textContent == '';
}

function play(cel) {
    let turn = game.nextTurn();
    gameboard.play(turn, getIndex(cel.id));
}

function printCel(cel) {
    cel.textContent = gameboard.getBoard()[getIndex(cel.id)];
}

function nextTurn() {
    game.changeTurn();
}

const winerPlays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

function checkCel(i){
    return gameboard.getBoard()[i] == game.nextTurn();
}

function notify(){
    tag.textContent = 'The Winer is ' + game.nextTurn();
}

function checkWin() {
    winerPlays.forEach(play => {
        if(checkCel(play[0]) && checkCel(play[1]) && checkCel(play[2])) {
            game.gameOver()
            notify();
        };
    });    
}

function gameOver(){
    return game.isOver();
}

//-------------------------------------------------------------

const cels = document.querySelectorAll('.cel');
const btn = document.querySelector('.restart');
const tag = document.querySelector('.winer');

btn.addEventListener('click', ()=>{
    game.restart();
    gameboard.reset();
    cels.forEach(cel => cel.textContent = '');
    tag.textContent = '';
});

cels.forEach(cel => cel.addEventListener('click', () => {
    if (!gameOver() && emptyCel(cel)) {
        play(cel);
        printCel(cel);
        checkWin()
        nextTurn();
    }
}));

/*
WINS

0 1 2
3 4 5
6 7 8

0 3 6
1 4 7
2 5 8

0 4 8
2 4 6
*/