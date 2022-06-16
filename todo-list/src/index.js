import Todo from './todo.js';
import TodoList from './todoList.js';

let lists = [];

const add = document.querySelector('.add-btn');
const name = document.querySelector('#list-name');
const ls = document.querySelector('.ls');
const title = document.querySelector('.list-title');
const todoList = document.querySelector('.todo-list');
const addTodoBtn = document.querySelector('.add-todo');
const t = document.querySelector('.todo-form');
const addNewTodoBtn = document.querySelector('.add');
const inputName = document.querySelector('#todo-name');
const inputDesc = document.querySelector('#todo-desc');
const inputDate = document.querySelector('#todo-date');

function getTodoList(id){
    return lists.find(l => l.getTitle() == id);
}

function addTodos(tl, arr){
    arr.forEach(todo => {
        tl.appendChild(createTodo(todo));
    });
}

function addEvent(a){
    a.addEventListener('click', (e) => {
        title.id = a.id;
        addTodoBtn.disabled = false;
        todoList.textContent = '';
        addTodos(todoList, getTodoList(a.id).getList());
        e.preventDefault();
    });
}

function updateAnchors(id){
    const as = document.querySelectorAll('a');
    as.forEach(a => {
        if(a.id == id){
            addEvent(a);
        }
    });
}

function updateListDOM(listName){
    let li = document.createElement('li');
    let a = document.createElement('a');

    li.id = listName;
    a.href = '';
    a.id = listName;
    a.textContent = listName;

    li.appendChild(a);
    ls.appendChild(li);

    updateAnchors(listName);
}

function nameExists(listName){
    return lists.find((l) => l.getTitle() == listName);
}

function createTodo(todo){
    const div = document.createElement('div');
    const h = document.createElement('h4');
    const check = document.createElement('input');
    const date = document.createElement('input');
    const p = document.createElement('p');

    div.id = todo.getTitle();

    h.id = todo.getTitle();
    h.textContent = todo.getTitle();

    check.type = 'checkbox';
    check.id = todo.getTitle();
    check.checked = todo.isCheck();
    check.addEventListener('click', ()=>{todo.setCheck(check.checked);});

    date.type = 'date';
    date.id = todo.getTitle();
    date.value = todo.getDate();

    p.textContent = todo.getDescription();

    div.appendChild(h);
    div.appendChild(check);
    div.appendChild(date);
    div.appendChild(p);

    return div;
}

add.addEventListener('click', (e)=>{
    if(name.value != '' && !nameExists(name.value)){
        const tl = new TodoList(name.value);
        lists.push(tl);
        updateListDOM(name.value);
        name.value = '';
    }
    e.preventDefault();
});

addTodoBtn.addEventListener('click', ()=>{    
    t.style.display = 'block';
    addTodoBtn.disabled = true;
});

addNewTodoBtn.addEventListener('click', (e)=>{
    if(inputName.value != '' && inputDate.value != ''){
        addTodoBtn.disabled = false;
        let todo = new Todo(inputName.value, inputDate.value);
        todo.setDescription(inputDesc.value);
        let todol = getTodoList(title.id);
        todol.addTodo(todo);
        todoList.appendChild(createTodo(todo));
        t.style.display = 'none';
        inputName.value = '';
        inputDate.value = '';
        inputDesc.value = '';
    }
    e.preventDefault();
});