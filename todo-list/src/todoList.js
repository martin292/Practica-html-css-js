class TodoList {
    constructor(title){
        this.title = title;
        this.list = [];
    }
    getTitle(){return this.title;}
    getList(){return this.list;}
    addTodo(todo){this.list.push(todo);}
}

export default TodoList;