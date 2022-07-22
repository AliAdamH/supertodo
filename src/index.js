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
const projectsBtn = document.querySelector('.projects');
const todoFromSelect = todoForm.querySelector('select');

console.log(todoFromSelect);

const projectExample = new project('starter');
let todo = new todoItem(
    {
        title: 'hello',
        description: 'potato',
        dueDate: '9/9/9',
        priority: 1,
        notes: 'bla bla bla'
    }
);

const secondProjectExample = new project('second');
let secondTodo = new todoItem(
    {
        title: 'AAAAAAAAAAAAAA',
        description: 'potato',
        dueDate: '9/9/9',
        priority: 1,
        notes: 'bla bla bla'
    }
)

projectExample.addTodo(todo);
secondProjectExample.addTodo(secondTodo);
projects.push(projectExample);
projects.push(secondProjectExample);

// Loop here.
projects.forEach((p, index) => {
    container.appendChild(renderProject(p, index));
})


// Helpers
// this is gonna break.
function refreshProject(p, index) {
    container.replaceChildren(renderProject(p, index));
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


function projectList() {
    return projects.map((p, index) => {
        let btn = document.createElement('button');
        btn.dataset.project = index;
        btn.innerText = p.name;
        btn.addEventListener('click', () => refreshProject(p,index));
        return btn;
    });
}

projectsBtn.addEventListener('click', () => {
    // render the list of projects.
    console.log(projectList());
    container.replaceChildren(...projectList());
})


projects.forEach((p, index) => {
    let option = document.createElement('option');
    option.value = index;
    option.innerText = p.name;
    todoFromSelect.appendChild(option);
})

