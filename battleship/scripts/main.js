import Board from "./classes/src/board.js";
import Ship from "./classes/src/ship.js";
import { Player, Computer } from "./classes/src/player.js";
import BoardGenerator from "../scripts/dom/generateBoard.js";

//-----------------------------------------------------------------

function addEvents(cells){
    cells.forEach(cell => {
        addClickEvent(cell.cel, cell.coord);
    });
}


function addClickEvent(div, coord){
    div.addEventListener('click', ()=>{
        playerPlay(div, coord);
        computerPlay();
    });
}

function playerPlay(div, coord){
    if(!computer.board.areAllShipsSunked()){
        computer.receiveAttack(coord); 
        changeBackgroundColor(div, coord);
    }else{
        alert('Win');
    }   
}

function computerPlay(){
    const coord = computer.randomPlay();
    player.receiveAttack(coord);
    const div = getDiv(coord);
    if(player.board.isHit(coord)){
        div.style.backgroundColor = 'red';
    }else{
        div.style.backgroundColor = 'white';
    }
}

function getDiv(coord){
    let ret = null;
    playerBoardCells.forEach(cell => {
        if(cell.coord.x == coord.x && cell.coord.y == coord.y){
            ret = cell.cel;
        }
    });
    return ret;
}

function changeBackgroundColor(div, coord){
    div.style.backgroundColor = (computer.board.isHit(coord))? 'red' : 'white';
}

//-----------------------------------------------------------------
const playerBoard = document.querySelector('#player');
const computerBoard = document.querySelector('#computer');
const bg = new BoardGenerator();

const playerBoardCells = bg.createBoard(playerBoard);
const computerBoardCells = bg.createBoard(computerBoard);

const player = new Player();
const computer = new Computer();

const sp1 = new Ship(5);
const sp2 = new Ship(4);
const sp3 = new Ship(3);
const sp4 = new Ship(3);
const sp5 = new Ship(2);

const sc1 = new Ship(5);
const sc2 = new Ship(4);
const sc3 = new Ship(3);
const sc4 = new Ship(3);
const sc5 = new Ship(2);

player.addShipHorizontal(sp1, {x:0, y:0});
player.addShipHorizontal(sp2, {x:2, y:2});
player.addShipVertical(sp3, {x:2, y:4});
player.addShipVertical(sp4, {x:7, y:5});
player.addShipVertical(sp5, {x:5, y:7});

computer.addShipHorizontal(sc1, {x:0, y:0});
computer.addShipHorizontal(sc2, {x:2, y:2});
computer.addShipVertical(sc3, {x:2, y:4});
computer.addShipVertical(sc4, {x:7, y:5});
computer.addShipVertical(sc5, {x:5, y:7});


addEvents(computerBoardCells);