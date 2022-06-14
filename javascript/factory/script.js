const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

//console.log(jeff.name); // 'jeff'
//jeff.sayHello(); // calls the function and logs 'hello!'
//console.log(jeff);

//-----------------------------------------------------------

const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

const a = counterCreator();

//a();
//a();

//-----------------------------------------------------------

const Player = (name, level) => {
    let health = level * 2;

    const getLevel = () => level;
    const getName = () => name;
    const die = () => console.log(name + ' Die');

    const damage = x => {
        health -= x;
        if (health <= 0) die();
    };

    const attack = enemy => {
        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }else{
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
    };

    return { attack, damage, getLevel, getName };
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
