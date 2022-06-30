class Ship{
    constructor(size){
        this.size = size;
        this.sunk = false;
        this.hitList = this.createHitList(size);
        this.coords = [];
    }

    createHitList(lenght){
        let arr = new Array(lenght);
        for (let i = 0; i < lenght; i++) {
            arr[i] = false;            
        }
        return arr;
    }

    hit(n){
        this.hitList[n] = true;
        this.sunk = this.isSunk();
    }

    isSunk(){
        return this.hitList.reduce((acc, curr) => curr && acc, true);
    }

    getPosition(coord){
        let ret = null;
        this.coords.forEach((e, i) => {
            if(e.x == coord.x && e.y == coord.y) ret = i;
        });
        return ret;
    }

    contains(coords){
        let ret = false;
        coords.forEach(coord => {
            ret = ret || (this.getPosition(coord) != null);
        });
        return ret;
    }
}

export default Ship;