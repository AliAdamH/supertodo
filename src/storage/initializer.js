import todoItem from "../todo/todo";
import project from "../project/project";

export default function initializer(projectsObject) {
    let projects = {};
    for(const projectIndex in projectsObject) {
        let projectObject = projectsObject[projectIndex];
        let projectName = projectObject.name;
        let projectTodos = projectObject.todos;
        let projectCreatedTodos = +projectObject.createdTodos; // Coerce into number


        let todos = {};
        for(const todoObj in projectTodos) {
            let newTodo = new todoItem(projectTodos[todoObj]);
            todos[todoObj] = newTodo;
        }

        let newProject = new project(projectName, todos, projectCreatedTodos);

        projects[projectIndex] = newProject;
    }

    return projects;
}