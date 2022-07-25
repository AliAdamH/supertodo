import { renderTodo } from "./todo/domTodo";
import project from "./project/project";
import renderProject from "./project/domProject";
import todoItem from "./todo/todo";
import initializer from "./storage/initializer";
import { STORAGE_KEY, CREATED_PROJECTS_COUNT_KEY } from "./storage/key";
import { serialize, deserialize } from './helpers/serialize';
import './style.css';


let projects = {};
let createdProjects = 0;
if(localStorage.getItem(STORAGE_KEY) && localStorage.getItem(CREATED_PROJECTS_COUNT_KEY)) {
    let projectsHash = deserialize(localStorage.getItem(STORAGE_KEY));
    let projectCount = +deserialize(localStorage.getItem(CREATED_PROJECTS_COUNT_KEY));
    projects = initializer(projectsHash);
    createdProjects = projectCount;
} else {
    localStorage.setItem(STORAGE_KEY, '{}');
    localStorage.setItem(CREATED_PROJECTS_COUNT_KEY, 0);
}

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

const  editTodoModal = document.querySelector('.edit-todo-modal');
const  editTodoForm = document.querySelector('.edit-todo-form');


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
projects[createdProjects] = projectExample;
createdProjects += 1;
projects[createdProjects] = secondProjectExample;
createdProjects += 1;
console.log(createdProjects);
localStorage.setItem(CREATED_PROJECTS_COUNT_KEY, createdProjects);
// Loop here.
function renderHome() {
    // Change the foreach for a hash iteration.
    let todosList = []
    for(const projectIndex in projects) {
        let p = projects[projectIndex];
        p.todos.forEach((todo) => {
            todosList.push(renderTodo(todo));
        })
    }
    // projects.forEach((p, index) => {
    //     p.todos.forEach((todo) => {
    //         todosList.push(renderTodo(todo));
    //     })
    // })

    return todosList;
}

// Helpers
// this is gonna break.
function refreshProject(p, index) {
    container.replaceChildren(renderProject(p, index));
    let todoEditBtn = document.querySelectorAll('.todo__edit-btn');
    if(todoEditBtn) {
        todoEditBtn.forEach((button) => button.addEventListener('click', (e) => editTodo(e)));
    }
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
    // domProject.appendChild(renderTodo(newTodo, domProject.childElementCount));
    // console.log(domProject.childElementCount);
    // domProject.appendChild(renderTodo(newTodo, domProject.childElementCount));    
    refreshProject(projects[projectIdx], projectIdx);
    modal.close();
    todoForm.reset();
})

closeTodoFormBtn.addEventListener('click', () => {
    modal.close();
})


function projectList() {
    //modify this map, to a for const projectIndx in projects, you can return an array for this purpose.
    let list = [];

    for(const index in projects) {
        let p = projects[index];
    
    // return projects.map((p, index) => {
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
        
        list.push(item);
    // });
    }

    return list;
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
    //This was updated.
    e.preventDefault();
    let data = new FormData(e.target);
    let { name } = Object.fromEntries(data);
    let newProject = new project(name);
    projects[createdProjects] = newProject;
    console.log(newProject);
    createdProjects += 1;
    localStorage.setItem(CREATED_PROJECTS_COUNT_KEY, createdProjects);
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


// Project Delete/Update;
function  deleteProject(e) {
    //reaplce the splice with a simple delete  + delete from storage.
    let projectIndex = e.target.dataset.project;
    // projects.splice(projectIndex, 1);
    delete projects[projectIndex];
    // add deletion from storage here.
    console.log('Project deleted !');
    projectsListDetails.replaceChildren(...projectList());
}

function editProject(e) {
    // This should be fine.
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
    // This should be fine, only add storage method here.
    e.preventDefault();
    let data = new FormData(e.target);
    let { name, projectIdx } = Object.fromEntries(data);
    projects[projectIdx].name = name;
    console.log('Project has been updated. ');


    projectsListDetails.replaceChildren(...projectList());
    ProjectEditModal.close();
    ProjectEditForm.reset();
});



function editTodo(e) {
    let { todoIdx } = e.target.dataset;
    let { projectIndex } = document.querySelector('section').dataset;
    let todoObj = projects[projectIndex].todos[todoIdx]

    // Get the fields.
    let titleField = editTodoForm.querySelector(`[name='title']`);
    let descriptionField = editTodoForm.querySelector(`[name='description']`);
    let dueDateField = 'TODO';
    let priorityField = editTodoForm.querySelector(`[name='priority']`);
    let notesField = editTodoForm.querySelector(`[name='notes']`);

    let projectIdHidden = editTodoForm.querySelector(`[name='projectIdx']`)
    let todoIdHidden = editTodoForm.querySelector(`[name='todoIdx']`)
    projectIdHidden.value = projectIndex;
    todoIdHidden.value = todoIdx;


    // remove this later ofc.
    let closeBtn = editTodoModal.querySelector('.close-button');
    // end
    titleField.value = todoObj.title;
    descriptionField.value = todoObj.description;
    priorityField.value = todoObj.priority;
    notesField.value = todoObj.notes;

    editTodoModal.showModal();
    closeBtn.addEventListener('click', () => editTodoModal.close());
}


editTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let dataObject = Object.fromEntries(data);
    let {   description, notes, priority, projectIdx, title, todoIdx } = dataObject;
    let p = projects[projectIdx].todos[todoIdx];

    p.description = description;
    p.notes = notes;
    p.priority = priority;
    p.title = title;
    
    //replace the current todo node with a new node.
    // get the parent node.
    // let parent = document.querySelector('section.project-container');
    // let oldChild = document.querySelector(`[data-todo-index='${todoIdx}']`);
    // // It's buggy because render todo doesn't include the buttons, we'll fix that.
    // let newChild = renderTodo(p, todoIdx);
    // parent.replaceChild(newChild, oldChild);

    refreshProject(projects[projectIdx], projectIdx);
    editTodoModal.close()

})