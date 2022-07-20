import { renderTodo } from "./todo/domTodo";
import project from "./project/project";
import renderProject from "./project/domProject";
import todoItem from "./todo/todo";



const projectExample = new project();
let todo = new todoItem(
    {
        title: 'hello',
        description: 'potato',
        dueDate: '9/9/9',
        priority: 1,
        notes: 'bla bla bla'
    }
);


let secondTodo = new todoItem(
    {
        title: 'hello',
        description: 'potato',
        dueDate: '9/9/9',
        priority: 1,
        notes: 'bla bla bla'
    }
);

projectExample.addTodo(todo);
projectExample.addTodo(secondTodo);


const container = document.querySelector('.example');
const projectContainer = renderProject(projectExample);
container.appendChild(projectContainer);
const modal = document.querySelector('.modal');
const addTodoBtn = document.querySelector('.addTodo');
const closeTodoFormBtn = document.querySelector('.close-button');
const todoForm = document.querySelector('.todo-form');

function refreshProject() {
    container.replaceChildren(renderProject(projectExample));
}



todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    let dataObject = Object.fromEntries(data);
    let newTodo = new todoItem(dataObject);
    projectExample.addTodo(newTodo);
    modal.close();
    refreshProject();
    todoForm.reset();
})
addTodoBtn.addEventListener('click', () => {
    modal.showModal();
})

closeTodoFormBtn.addEventListener('click', () => {
    modal.close();
})