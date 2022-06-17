class TodoList {
    constructor(title){
        this.title = title;
        this.list = [];
    }
    getTitle(){return this.title;}
    getList(){return this.list;}
    addTodo(todo){this.list.push(todo);}
    remove(todo){
        this.list = this.list.filter(t => t != todo);
    }
}

export default TodoList;