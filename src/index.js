import { renderTodo } from "./todo/domTodo";
import project from "./project/project";
import renderProject from "./project/domProject";
import todoItem from "./todo/todo";



let projects = [];

const container = document.querySelector('.example');
const modal = document.querySelector('.modal');
const addTodoBtn = document.querySelector('.addTodo');
const closeTodoFormBtn = document.querySelector('.close-button');
const todoForm = document.querySelector('.todo-form');


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

projectExample.addTodo(todo);
projects.push(projectExample);


// Loop here.
projects.forEach((p, index) => {
    container.appendChild(renderProject(p, index));
})


// Helpers
// this is gonna break.
function refreshProject(p) {
    container.replaceChildren(renderProject(p, 0));
}



// Event listeners.


todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    let dataObject = Object.fromEntries(data);
    let newTodo = new todoItem(dataObject);
    // retrieve the project's index.
    const projectIdx  = +newTodo.project || 0;
    // find the project Object not dom, call the addTodo method on it.
    projects[projectIdx].addTodo(newTodo);
    // find the project in the dom with a querySelector.
    const domProject = document.querySelector(`[data-project-index='${projectIdx}']`);
    console.log(domProject.childElementCount);
    domProject.appendChild(renderTodo(newTodo, domProject.childElementCount));    

    modal.close();
    todoForm.reset();
})


addTodoBtn.addEventListener('click', () => {
    modal.showModal();
})

closeTodoFormBtn.addEventListener('click', () => {
    modal.close();
})