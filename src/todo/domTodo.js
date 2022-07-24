function renderContainer() {
    const element = document.createElement('div');
    element.classList.add('todo')

    return element;
}


function renderDescription(content) {
    const description = document.createElement('p');
    description.classList.add('todo__description');
    description.innerText = content;

    return description;

}


function renderInformations({dueDate,priority}) {

    const infos = document.createElement('ul');
    infos.classList.add('todo__infos');

    const dueDateElement = document.createElement('li');
    dueDateElement.innerText = dueDate;

    const priorityElement = document.createElement('li');
    priorityElement.innerText = priority;

    infos.appendChild(dueDateElement);
    infos.appendChild(priorityElement);

    return infos;
}


function renderNotes(content) {
    const notes = document.createElement('p');
    notes.classList.add('todo__notes');
    notes.innerText = content;

    return notes;

}

function renderHeader(content) {
    const headerWrapper = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = content;
    headerWrapper.classList.add('todo__header');
    headerWrapper.appendChild(title);

    return headerWrapper;
}


function renderTodo(todo, index) {

    let container = renderContainer();
    container.dataset.todoIndex = index;
    let {title, description, dueDate, priority, notes } = todo;
    container.append(
        renderHeader(title),
        renderDescription(description),
        renderInformations({dueDate, priority}),
        renderNotes(notes)
    )

    return container;

}


export { renderTodo };