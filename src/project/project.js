export default class project {

    constructor(name, todos = {}, createdTodos = 0) {
        this.name = name;
        this.todos = todos;
        this.createdTodos = createdTodos;
    }

    addTodo = (todo) => {
        this.todos[this.createdTodos] = todo;
        this.createdTodos += 1;
    }

    removeTodo = (index) => {
        // remove Todo : Use index or something else ?
        // this.todos.splice(index, 1);
        delete this.todos[index];
    }
}