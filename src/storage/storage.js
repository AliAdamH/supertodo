import { STORAGE_KEY } from "./key";
import { serialize, deserialize } from '../helpers/serialize';


function addTodoToStorage(projectIndex, todoIndex, todoObj) {
    //1. Get the storage data.
    let data = deserialize(localStorage.getItem(STORAGE_KEY));

    //2. Operation
    data[projectIndex].todos[todoIndex] = todoObj;

    //3. Insert the data back.
    let stringified = serialize(data);
    localStorage.setItem(STORAGE_KEY, stringified);
}


function addProjectToStorage(projectIndex, projectObject) {
    let data = deserialize(localStorage.getItem(STORAGE_KEY));
    data[projectIndex] = projectObject;
    let stringified = serialize(data);
    localStorage.setItem(STORAGE_KEY, stringified);
}

function  updateTodoInStorage(projectIndex, todoIndex, todoObj) {
    addTodoToStorage(projectIndex,todoIndex, todoObj );
}

function updateProjectInStorage(projectIndex, projectObject) {
    addProjectToStorage(projectIndex, projectObject);
}

function deleteTodoFromStorage(projectIndex, todoIndex) {
    let data = deserialize(localStorage.getItem(STORAGE_KEY));
    delete data[projectIndex].todos[todoIndex]
    let stringified = serialize(data);
    localStorage.setItem(STORAGE_KEY, stringified);
}

function deleteProjectFromStorage(projectIndex) {
    let data = deserialize(localStorage.getItem(STORAGE_KEY));
    delete data[projectIndex];
    let stringified = serialize(data);
    localStorage.setItem(STORAGE_KEY, stringified);
}

