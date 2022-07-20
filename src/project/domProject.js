import { renderTodo } from "../todo/domTodo";

export default function renderProject(project) {
    const projectContainer = document.createElement('section');
    const projectName = document.createElement('h2');
    projectName.innerText = project.name;

    project.todos.forEach(todo => {
        projectContainer.appendChild(renderTodo(todo));
    });

    return projectContainer;
}   

