import Ship from "../src/ship";

test('Create Ship', () => {
    const ship = new Ship(1);

    expect(ship.size).toBe(1);
    expect(ship.sunk).toBeFalsy();
    expect(ship.hitList).toContain(false);
    expect(ship.coords).toStrictEqual([]);
});

test('Create Hit List', ()=>{
    const ship = new Ship(1);
    const hl1 = ship.createHitList(5);
    const hl2 = ship.createHitList(1);
    const hl3 = ship.createHitList(2);
    const hl4 = ship.createHitList(0);

    expect(hl1).toStrictEqual([false, false, false, false, false]);
    expect(hl2).toStrictEqual([false]);
    expect(hl3).toStrictEqual([false, false]);
    expect(hl4).toStrictEqual([]);

    expect(hl1).not.toContain(true);
    expect(hl2[0]).toBeFalsy();
    expect(hl4).not.toContain(false);
});

test('Hit', ()=>{
    const ship = new Ship(3);

    ship.hit(1);

    expect(ship.hitList).toContain(true);
    expect(ship.hitList[0]).toBe(false);
    expect(ship.hitList[1]).toBe(true);
    expect(ship.hitList[2]).toBe(false);
    expect(ship.sunk).toBeFalsy();

    ship.hit(0);
    ship.hit(2);

    expect(ship.hitList).not.toContain(false);
    expect(ship.hitList[0]).toBe(true);
    expect(ship.hitList[1]).toBe(true);
    expect(ship.hitList[2]).toBe(true);
    expect(ship.sunk).toBeTruthy();
});

test('Is Sunk', ()=>{
    const ship = new Ship(3);

    ship.hit(0);
    expect(ship.isSunk()).toBeFalsy();
    ship.hit(1);
    expect(ship.isSunk()).toBeFalsy();
    ship.hit(2);
    expect(ship.isSunk()).toBeTruthy();
})

test('Get Position', ()=>{
    const ship = new Ship(3);
    ship.coords = [{x:0, y:0}, {x:0, y:1}, {x:0, y:2}];

    expect(ship.getPosition({x:0, y:0})).toBe(0);
    expect(ship.getPosition({x:0, y:1})).toBe(1);
    expect(ship.getPosition({x:0, y:2})).toBe(2);
    expect(ship.getPosition({x:2, y:2})).toBeNull();
});