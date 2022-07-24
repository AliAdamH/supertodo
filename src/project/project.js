export default class project {

    constructor(name, todos = []) {
        this.name = name;
        this.todos = todos;
    }

    addTodo = (todo) => {
        this.todos.push(todo)
    }

    removeTodo = (index) => {
        // remove Todo : Use index or something else ?
        this.todos.splice(index, 1);
    }
}