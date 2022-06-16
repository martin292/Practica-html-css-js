class Todo {
    constructor(title, date){
        this.title = title;
        this.description = '';
        this.date = date;
        this.check = false;
    }

    getTitle(){return this.title;}
    getDescription(){return this.description;}
    getDate(){return this.date;}
    isCheck(){return this.check;}
    setCheck(check){this.check = check;}
    setDescription(des){this.description = des;}
}

export default Todo;