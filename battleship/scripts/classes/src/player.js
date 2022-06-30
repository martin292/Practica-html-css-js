import Board from "./board"
import Ship from "./ship";

class Player{
    constructor(){
        this.board = new Board(); 
    }

    addShipHorizontal(ship, coord){
        try {
            this.board.addShipHorizontal(ship, coord);
        } catch (error) {
            console.log(error);
        }
    }

    addShipVertical(ship, coord){
        try {
            this.board.addShipVertical(ship, coord);
        } catch (error) {
            console.log(error);
        }
    }

    receiveAttack(coord){
        this.board.receiveAttack(coord);
    }
}

class Computer extends Player{
    constructor(){
        super();
        this.attacks = [];
    }
    populateBoard(){
        const ships = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
        try {
            ships.forEach(ship => {
                const coord = this.generateRandomCoord();
                this.chooseDirectionAndAddShip(this.getRandomInt(), ship, coord);
            });
        } catch (error) {
            console.log(error);
        }        
    }

    getRandomInt() {
        let min = Math.ceil(0);
        let max = Math.floor(9);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    chooseDirectionAndAddShip(n, ship, coord){
        if(n >= 0 && n <= 4){
            super.addShipHorizontal(ship, coord);
        }else{
            super.addShipVertical(ship, coord);
        }
    }

    generateRandomCoord(){
        return {x:this.getRandomInt(), y:this.getRandomInt()};
    }
}