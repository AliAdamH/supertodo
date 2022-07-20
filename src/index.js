import { renderTodo } from "./todo/domTodo";
import todoItem from "./todo/todo";


let todo = new todoItem(
    {
        title: 'hello',
        description: 'potato',
        dueDate: '9/9/9',
        priority: 1,
        notes: 'bla bla bla'
    }
);

const container = document.querySelector('.example');
const todoContainer = renderTodo(todo);
container.appendChild(todoContainer);