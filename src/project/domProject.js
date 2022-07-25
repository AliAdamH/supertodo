import { renderTodo } from "../todo/domTodo";
import { deleteTodoFromStorage } from "../storage/storage";

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
    

    const deleteBtn = (todoIndex, c) => {
        let btn = document.createElement('button');
        btn.innerText = 'DELETE TODO';
        btn.addEventListener('click', () => {
            project.removeTodo(todoIndex);
            deleteTodoFromStorage.call(window, index, todoIndex);
            projectContainer.removeChild(c);
        })
        return btn;
    }

    const editBtn = (todoIndex) => {
        let btn = document.createElement('button');
        btn.innerText = 'EDIT TODO';
        btn.classList.add('todo__edit-btn');
        btn.dataset.todoIdx = todoIndex;
        return btn;
    }  

    projectContainer.appendChild(addTodo);

    // It's a hash so replace the foreach.
    for(const index in project.todos) {
        let todo = project.todos[index];
        // project.todos.forEach((todo, index) => {
        let renderedTodo = renderTodo(todo, index);
        let todoHeader = renderedTodo.querySelector('.todo__header');
        todoHeader.appendChild(deleteBtn(index, renderedTodo));
        todoHeader.appendChild(editBtn(index));
        console.log(renderedTodo);
        projectContainer.appendChild(renderedTodo);
            // });
    }

    return projectContainer;
}   

