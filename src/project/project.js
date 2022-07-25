export default class project {

    constructor(name, todos = {}) {
        this.name = name;
        this.todos = todos;
        this.created_todos = 0;
    }

    addTodo = (todo) => {
        this.todos[this.created_todos] = todo;
        this.created_todos += 1;
    }

    removeTodo = (index) => {
        // remove Todo : Use index or something else ?
        // this.todos.splice(index, 1);
        delete this.todos[index];
    }
}