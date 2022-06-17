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

function removeTodoList(id){
    lists = lists.filter(tl => tl.getTitle() != id);
}

function updateTodoList(id){
    if(title.id == id){
        title.id = '';
        todoList.textContent = '';
    }
}

function addDeleteListEventToButton(btn, li){
    btn.addEventListener('click', (e)=>{
        updateTodoList(btn.id);
        removeTodoList(btn.id);
        ls.removeChild(li);
    });
}

function updateListDOM(listName){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let del = document.createElement('button');
    
    li.id = listName;
    a.href = '';
    a.id = listName;
    a.textContent = listName;
    del.id = listName;
    del.textContent = '-';

    addDeleteListEventToButton(del, li);

    li.appendChild(a);
    li.appendChild(del);
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
    const del = document.createElement('button');

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

    del.id = todo.getTitle();
    del.textContent = 'Delet';
    del.addEventListener('click', ()=>{
        getTodoList(title.id).remove(todo);
        todoList.removeChild(div); 
    });

    div.appendChild(h);
    div.appendChild(check);
    div.appendChild(date);
    div.appendChild(p);
    div.appendChild(del);

    return div;
}

function todoInputComplete(){
    return inputName.value != '' && inputDate.value != '';
}
function enableAddTodoButton(){
    addTodoBtn.disabled = false;    
}
function restartForm(){
    t.style.display = 'none';
    inputName.value = '';
    inputDate.value = '';
    inputDesc.value = ''; 
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
    if(todoInputComplete()){
        enableAddTodoButton();

        let todo = new Todo(inputName.value, inputDate.value);
        todo.setDescription(inputDesc.value);

        getTodoList(title.id).addTodo(todo);
        todoList.appendChild(createTodo(todo));

        restartForm()
    }
    e.preventDefault();
});