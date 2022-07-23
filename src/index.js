import { renderTodo } from "./todo/domTodo";
import project from "./project/project";
import renderProject from "./project/domProject";
import todoItem from "./todo/todo";
import './style.css';


let projects = [];

const container = document.querySelector('.example');
const modal = document.querySelector('.modal');
const addTodoBtn = document.querySelector('.addTodo');
const closeTodoFormBtn = document.querySelector('.close-button');
const todoForm = document.querySelector('.todo-form');
const projectsBtn = document.querySelector('.projects');
const projectsListDetails = document.querySelector('.projects ul');
const todoFromSelect = todoForm.querySelector('select');
const addProjectBtn = document.querySelector('.addProject');
const projectModal = document.querySelector('.project-modal');
const projectForm = document.querySelector('.project-form');
const closeProjectForm = projectModal.querySelector('.close-btn')
const homeBtn = document.querySelector('.home');

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
function renderHome() {
    let todosList = []
    projects.forEach((p, index) => {
        p.todos.forEach((todo) => {
            todosList.push(renderTodo(todo));
        })
    })

    return todosList;
}

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
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.href = '#';
        link.innerText = p.name;
        link.dataset.project = index;
        link.addEventListener('click', () => refreshProject(p,index));
        item.appendChild(link);
        return item;
    });
}

projectsBtn.addEventListener('toggle', () => {
    if(projectsBtn.open) {
        projectList().forEach((p) => {
            projectsListDetails.append(p);
        })
    } else {
        projectsListDetails.replaceChildren();
    }
})


projects.forEach((p, index) => {
    let option = document.createElement('option');
    option.value = index;
    option.innerText = p.name;
    todoFromSelect.appendChild(option);
})



// New project logic.

addProjectBtn.addEventListener('click', () => {
    projectModal.showModal();
})

closeProjectForm.addEventListener('click', () => {
    projectModal.close();
})


projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let { name } = Object.fromEntries(data);
    let newProject = new project(name);
    projects.push(newProject);
    console.log(newProject);
})


homeBtn.addEventListener('click', () => {
    container.replaceChildren(...renderHome());
})

document.addEventListener('DOMContentLoaded', () => {
    container.replaceChildren(...renderHome());
})