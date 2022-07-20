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
)

projectExample.addTodo(todo);
projectExample.addTodo(secondTodo);


const container = document.querySelector('.example');
const projectContainer = renderProject(projectExample);
container.appendChild(projectContainer);