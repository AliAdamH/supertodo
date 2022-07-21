import { renderTodo } from "../todo/domTodo";

export default function renderProject(project, index) {
    const projectContainer = document.createElement('section');
    projectContainer.dataset.projectIndex = index;
    const projectName = document.createElement('h2');
    projectName.innerText = project.name;

    project.todos.forEach((todo, index) => {
        projectContainer.appendChild(renderTodo(todo, index));
    });

    return projectContainer;
}   

