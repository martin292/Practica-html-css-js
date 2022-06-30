import Ship from '../src/ship'

/*
Board Size
x: 0 to 9
y: 0 to 9
*/

class Board {
    constructor() {
        this.ships = [];
        this.missedShots = [];
    }

    addShipHorizontal(ship, coord) {
        if (!this.outOfRangeX(ship.size, coord)) {
            let coords = [];
            for (let i = 0; i < ship.size; i++) {
                coords.push({ x: coord.x + i, y: coord.y })
            }
            if(!this.shipColition(coords)){
                ship.coords = coords;
                this.ships.push(ship);
            }else{
                throw Error('Ship colition');
            }
        }else{
            throw Error('Out of range');
        }
    }

    addShipVertical(ship, coord) {
        if(!this.outOfRangeY(ship.size, coord)){
            let coords = [];
            for (let i = 0; i < ship.size; i++) {
                coords.push({ x: coord.x, y: coord.y + i })
            }
            if(!this.shipColition(coords)){
                ship.coords = coords;
                this.ships.push(ship);
            }else{
                throw Error('Ship colition');
            }
        }else{
            throw Error('Out of range');
        }     
    }

    outOfRangeX(lenght, coord) {
        return (coord.x + lenght) > 9;
    }

    outOfRangeY(lenght, coord) {
        return (coord.y + lenght) > 9;
    }

    shipColition(coords) {
        let ret = false;
        this.ships.forEach(ship => {
            ret = ret || ship.contains(coords);
        });
        return ret;
    }

    receiveAttack(coord) {
        if(this.isHit(coord)){
            this.hit(this.getShip(coord), coord);
        }else{
            this.addMissedShot(coord);
        }
    }

    isHit(coord) {
        return this.shipColition([coord]);
    }

    hit(ship, coord) {
        const position = ship.getPosition(coord);
        ship.hit(position);
    }

    getShip(coord){
        return this.ships.find(ship =>  ship.contains([coord]) );
    }

    addMissedShot(coord) { 
        this.missedShots.push(coord);
    }

    areAllShipsSunked() {
        return this.ships.reduce((acc, cur) => cur.sunk && acc, true);
    }
}

export default Board;