import Ship from "../src/ship";
import Board from "../src/board";

test('Create Board', () => {
    const board = new Board();

    expect(board.ships).toStrictEqual([]);
    expect(board.missedShots).toStrictEqual([]);
});

test('Add Ship Horizontal', ()=>{
    const board = new Board();
    const ship = new Ship(3);

    board.addShipHorizontal(ship, {x:0, y:0});

    expect(board.ships.length).toBe(1);
    expect(board.ships).toContain(ship);
    expect(ship.coords.length).toBe(3);
    expect(ship.coords).toContainEqual({x:0, y:0});
    expect(ship.coords).toContainEqual({x:1, y:0});
    expect(ship.coords).toContainEqual({x:2, y:0});
});

test('Add Ship Vertical', ()=>{
    const board = new Board();
    const ship = new Ship(3);

    board.addShipVertical(ship, {x:0, y:0});

    expect(board.ships.length).toBe(1);
    expect(board.ships).toContain(ship);
    expect(ship.coords.length).toBe(3);
    expect(ship.coords).toContainEqual({x:0, y:0});
    expect(ship.coords).toContainEqual({x:0, y:1});
    expect(ship.coords).toContainEqual({x:0, y:2});
});

test('Add Ship Horizontal throw error (Out of range)', ()=>{
    const board = new Board();
    const ship = new Ship(3);

    expect(() => board.addShipHorizontal(ship, {x:8, y:0})).toThrow('Out of range');
    expect(() => board.addShipHorizontal(ship, {x:8, y:0})).toThrow(Error);
});

test('Add Ship Vertical throw error (Out of range)', ()=>{
    const board = new Board();
    const ship = new Ship(3);

    expect(() => board.addShipVertical(ship, {x:0, y:8})).toThrow('Out of range');
    expect(() => board.addShipVertical(ship, {x:0, y:8})).toThrow(Error);
});

test('Ship Colition', ()=>{
    const board = new Board();
    const ship= new Ship(3);
    const coords = [{x:0, y:1}, {x:1, y:1}, {x:2, y:1}];

    ship.coords = [{x:0, y:0}, {x:0, y:1}, {x:0, y:2}];

    board.ships.push(ship);

    expect(board.shipColition(coords)).toBeTruthy();
});

test('Add Ship Vertical throw error (Ship colition)', ()=>{
    const board = new Board();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);

    board.addShipVertical(ship1 , {x:0, y:0});

    expect(() => board.addShipVertical(ship2, {x:0, y:1})).toThrow('Ship colition');
    expect(() => board.addShipVertical(ship2, {x:0, y:1})).toThrow(Error);
});

test('Add Ship Horizontal throw error (Ship colition)', ()=>{
    const board = new Board();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);

    board.addShipVertical(ship1 , {x:0, y:0});

    expect(() => board.addShipHorizontal(ship2, {x:0, y:1})).toThrow('Ship colition');
    expect(() => board.addShipHorizontal(ship2, {x:0, y:1})).toThrow(Error);
});

test('Receive Attack (Missed)', ()=>{
    const board = new Board();
    const ship = new Ship(3);

    board.addShipHorizontal(ship, {x:0, y:0});
    board.receiveAttack({x:5, y:5});

    expect(board.missedShots.length).toBe(1);
    expect(board.missedShots).toContainEqual({x:5, y:5});
});

test('Receive Attack (Hit)', ()=>{
    const board = new Board();
    const ship = new Ship(3);

    board.addShipHorizontal(ship, {x:0, y:0});
    board.receiveAttack({x:1, y:0});

    expect(board.missedShots.length).toBe(0);

    expect(ship.hitList).toStrictEqual([false, true, false]);
});

test('Search Ship', ()=>{
    const board = new Board();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);

    board.addShipHorizontal(ship1, {x:0, y:0});
    board.addShipHorizontal(ship2, {x:5, y:2});

    expect(board.getShip({x:6, y:2})).toBe(ship2);
});

test('Are All Ships Sunked', ()=>{
    const board = new Board();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);

    board.addShipHorizontal(ship1, {x:0, y:0});
    board.addShipHorizontal(ship2, {x:5, y:2});

    ship1.sunk = true;

    expect(board.areAllShipsSunked()).toBeFalsy();

    ship2.sunk = true;

    expect(board.areAllShipsSunked()).toBeTruthy();
});