//OBJ-CONSTRUCTORS-------------------------------------------------------------
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let ret = title + ' by ' + author + ', ' + pages + ' pages, ';
        return (read)? ret + 'you have read the book.' : ret + 'you havent read the book';
    };
}

//let b = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);

//PROTOTYPES-------------------------------------------------------------------

function Student() {
    this.bla = 'Hola'
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype) //Herencia de prototipos

const carl = new EighthGrader("carl");
//carl.sayName() // console.logs "carl"
//console.log(carl.grade); // 8

//console.log(Student.prototype);

//----------

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype = new Student();
//Person.prototype = Object.create(Student.prototype);
Person.prototype.interests = ['x', 'y', 'z'];
Person.prototype.getAge = function(){ return this.age;}


Student.prototype.vivo = true;

const a = new Person('A', 1);
const b = new Person('B', 2);

console.log(a, b, carl);

let c = new Object();
c = {name: 'Mike'};

