import { renderTodo } from "../todo/domTodo";

export default function renderProject(project, index) {
    const addTodo = document.createElement('button');
    addTodo.classList.add('addTodo');
    addTodo.innerText = 'Add todo';
    addTodo.addEventListener('click', () => {
        modal.showModal();
    })
    const projectContainer = document.createElement('section');
    projectContainer.dataset.projectIndex = index;
    projectContainer.classList.add('project-container');
    const projectName = document.querySelector('h1');
    projectName.innerText = project.name;
    


    projectContainer.appendChild(addTodo);

    project.todos.forEach((todo, index) => {
        projectContainer.appendChild(renderTodo(todo, index));
    });

    return projectContainer;
}   

