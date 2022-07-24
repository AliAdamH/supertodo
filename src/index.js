import { renderTodo } from "./todo/domTodo";
import project from "./project/project";
import renderProject from "./project/domProject";
import todoItem from "./todo/todo";
import './style.css';


let projects = [];

const container = document.querySelector('.example');
const modal = document.querySelector('.modal');
const pageTitle = document.querySelector('h1');
const closeTodoFormBtn = document.querySelector('.close-button');
const todoForm = document.querySelector('.todo-form');
const projectsBtn = document.querySelector('.projects');
const projectsListDetails = document.querySelector('.projects ul');
const addProjectBtn = document.querySelector('.addProject');
const projectModal = document.querySelector('.project-modal');
const projectForm = document.querySelector('.project-form');
const closeProjectForm = projectModal.querySelector('.close-btn')
const homeBtn = document.querySelector('.home');
const ProjectEditForm = document.querySelector('.edit-project-form');
const ProjectEditModal = document.querySelector('.edit-project-modal');
const closeProjectEditModal = ProjectEditModal.querySelector('.close-btn');
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
    // retrieve the project's index (from the page itself).
    const domProject = document.querySelector(`[data-project-index]`);
    const projectIdx = +domProject.dataset.projectIndex;
    // find the project Object not dom, call the addTodo method on it.
    projects[projectIdx].addTodo(newTodo);
    domProject.appendChild(renderTodo(newTodo, domProject.childElementCount));
    
    // console.log(domProject.childElementCount);
    // domProject.appendChild(renderTodo(newTodo, domProject.childElementCount));    

    modal.close();
    todoForm.reset();
})

closeTodoFormBtn.addEventListener('click', () => {
    modal.close();
})


function projectList() {
    return projects.map((p, index) => {
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&cross;';
        deleteBtn.dataset.project = index;
        deleteBtn.addEventListener('click', (e) => deleteProject(e));

        let editBtn = document.createElement('button');
        editBtn.innerHTML = '&#9998;';
        editBtn.dataset.project = index;
        editBtn.addEventListener('click', (e) => editProject(e));

        let item = document.createElement('li');
        let link = document.createElement('a');
        link.href = '#';
        link.innerText = p.name;
        link.dataset.project = index;
        link.addEventListener('click', () => refreshProject(p,index));
        item.appendChild(link);
        item.appendChild(deleteBtn);
        item.appendChild(editBtn);
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
    projectsListDetails.replaceChildren(...projectList());
    projectForm.reset()
    projectModal.close();
})


homeBtn.addEventListener('click', () => {
    pageTitle.innerText = 'All todos';
    container.replaceChildren(...renderHome());
})

document.addEventListener('DOMContentLoaded', () => {
    container.replaceChildren(...renderHome());
})

function  deleteProject(e) {
    let projectIndex = e.target.dataset.project;
    projects.splice(projectIndex, 1);
    console.log('Project deleted !');
    projectsListDetails.replaceChildren(...projectList());
}

function editProject(e) {
    
    let editProjectForm = document.querySelector('.edit-project-form');
    let hiddenField = editProjectForm.querySelector(`[type='hidden']`);
    let projectIndex = e.target.dataset.project;
    let projectName = projects[projectIndex].name;
    let nameField = editProjectForm.querySelector(`[name='name']`);
    nameField.value = projectName;
    hiddenField.value = projectIndex;
    ProjectEditModal.showModal();
    closeProjectEditModal.addEventListener('click', () => ProjectEditModal.close());
}


ProjectEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let { name, projectIdx } = Object.fromEntries(data);
    projects[projectIdx].name = name;
    console.log('Project has been updated. ');


    projectsListDetails.replaceChildren(...projectList());
    ProjectEditModal.close();
    ProjectEditForm.reset();
});

