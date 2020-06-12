import Storage from './localStorage';

const display = (() => {
  // todoInfoObj being used for editing todos
  let todoInfoObj;

  const testInput = (field, button) => {
    if (field.value === '') {
      button.classList.add('hidden');
      field.classList.add('missing');
    } else {
      button.classList.remove('hidden');
      field.classList.remove('missing');
    }
  };

  const clearField = (field) => {
    field.value = '';
  };
  const bodyElement = document.querySelector('body');
  // Todos
  const listContainer = document.getElementById('list');

  const nameField = document.getElementById('name');
  const dateField = document.getElementById('date');
  const descriptionField = document.getElementById('description');
  const priorityField = document.getElementById('priority');

  const formSubmit = document.querySelector('.form-submit');

  const checkTodoName = () => {
    testInput(nameField, formSubmit);
  };

  const getInput = () => {
    const name = nameField.value;
    const date = dateField.value;
    const description = descriptionField.value;
    const priority = priorityField.value;
    return [name, date, description, priority];
  };

  const getEditInput = () => {
    const form = document.querySelector('.formClone');
    const name = form.querySelector('#name').value;
    const date = form.querySelector('#date').value;
    const description = form.querySelector('#description').value;
    const priority = form.querySelector('#priority').value;
    return {
      name, date, description, priority,
    };
  };

  const checkDate = (todo) => (todo.date ? todo.date : 'No deadline');

  const getCurrent = () => document.querySelector('.selected');

  const clearTodos = () => {
    listContainer.innerHTML = '';
  };

  const deleteThis = (e) => {
    const index = parseInt((e.target.parentNode.dataset.indexNumber), 10);
    const parentProject = getCurrent().id;
    const parentObj = JSON.parse(localStorage[parentProject]);
    parentObj.todos.splice(index, 1);
    localStorage.setItem(parentProject, Storage.serialized(parentObj));
    showTodos();
  };

  // creates a button element with the name of the object in question as the ID
  const deleteButton = () => {
    const button = document.createElement('button');
    button.className = 'btn btn-danger delete-todo';
    button.innerHTML = 'Delete Todo';
    button.addEventListener('click', deleteThis, false);
    return button;
  };

  // with target event get localstorage obj and return a formatted obj of the todos information
  const getStorageObj = (event) => {
    const index = parseInt((event.target.parentNode.dataset.indexNumber), 10);
    const parentName = getCurrent().id;
    const parentObj = JSON.parse(localStorage[parentName]);
    const todo = parentObj.todos[index];
    return {
      parentObj, todo, index, parentName,
    };
  };

  const saveAndUpdate = (event) => {
    const node = event.target.parentNode;
    node.classList.add('hidden');
    // format the edit menu user input into an object
    const inputInfo = getEditInput();
    // remove the clone form after getting input
    bodyElement.removeChild(node);
    // update parentObj with edit menu inputs
    todoInfoObj.parentObj.todos[todoInfoObj.index].name = inputInfo.name;
    todoInfoObj.parentObj.todos[todoInfoObj.index].date = inputInfo.date;
    todoInfoObj.parentObj.todos[todoInfoObj.index].description = inputInfo.description;
    todoInfoObj.parentObj.todos[todoInfoObj.index].priorityVal = inputInfo.priority;
    // <-->
    localStorage.setItem(todoInfoObj.parentName, Storage.serialized(todoInfoObj.parentObj));
    showTodos();
  };

  const createEditMenu = (todo) => {
    const cloneForm = document.querySelector('#form').cloneNode(true);
    cloneForm.classList.add('formClone');
    const title = document.createElement('h1');
    title.innerHTML = 'Edit Todo';
    cloneForm.prepend(title);
    cloneForm.querySelector('#name').value = todo.name;
    cloneForm.querySelector('#date').value = todo.date;
    cloneForm.querySelector('#description').value = todo.description;
    cloneForm.querySelector('#priority').value = todo.priorityVal;
    const button = document.createElement('button');
    button.innerHTML = 'Save';
    button.className = 'btn btn-success';
    button.addEventListener('click', saveAndUpdate, false);
    cloneForm.appendChild(button);
    return cloneForm;
  };

  const editTodo = (event) => {
    // returns a formmated obj from the localStorage using target event
    todoInfoObj = getStorageObj(event);
    // create an edit menu with target event Todo information
    const editFormDiv = createEditMenu(todoInfoObj.todo);
    bodyElement.appendChild(editFormDiv);
  };

  const editButton = () => {
    const button = document.createElement('button');
    button.className = 'btn btn-info update-todo';
    button.innerHTML = 'View';
    button.addEventListener('click', editTodo, false);
    return button;
  };

  const createTodoLi = (todo, index) => {
    const item = document.createElement('LI');
    item.innerHTML = `<span class="text ${todo.priorityVal}"> ${todo.name} - ${checkDate(todo)}</span>`;
    const deletebtn = deleteButton();
    const editbtn = editButton();
    item.append(deletebtn, editbtn);
    item.setAttribute('data-index-number', index);
    return item;
  };

  const showTodos = () => {
    clearField(nameField);
    const project = JSON.parse(localStorage.getItem(getCurrent().id));
    clearTodos();
    let item;
    for (let i = 0; i < project.todos.length; i += 1) {
      item = createTodoLi(project.todos[i], i);
      display.listContainer.appendChild(item);
    }
  };

  const selectProject = (e) => {
    const project = e.target;
    display.swapSelected(project);
    showTodos();
  };

  // Project
  const projectName = document.querySelector('#project-name');
  const projectsContianer = document.getElementById('projects');
  const formProjectSubmit = document.querySelector('.form-submit-project');

  const clearProjects = () => {
    projectsContianer.innerHTML = '';
  };

  const buildProjects = (project, item, key, clickEvent) => {
    item.innerText = project.name;
    item.setAttribute('id', key);
    item.addEventListener('click', clickEvent);
    if (key === 'default') {
      item.classList.add('selected');
    }
    projectsContianer.appendChild(item);
  };

  const showProjects = () => {
    clearField(projectName);
    clearProjects();
    for (let i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i) !== 'undefined') {
        const current = Storage.getItem(localStorage.key(i));
        const item = document.createElement('LI');
        const key = localStorage.key(i);
        buildProjects(current, item, key, selectProject);
      }
    }
  };

  const checkProjectName = () => {
    testInput(projectName, formProjectSubmit);
  };

  const currentProject = () => JSON.parse(localStorage.getItem(display.getCurrent().id));

  const removeSelected = () => {
    display.projectsContianer.childNodes.forEach(item => item.classList.remove('selected'));
  };

  const addSelected = (element) => {
    element.classList.add('selected');
  };

  const projectInput = () => projectName.value;

  const setListeners = (saveProject, updateTodos) => {
    formProjectSubmit.addEventListener('click', saveProject, false);
    formSubmit.addEventListener('click', updateTodos, false);
    nameField.addEventListener('keyup', checkTodoName, false);
    projectName.addEventListener('keyup', checkProjectName, false);
  };

  const swapSelected = (project) => {
    removeSelected();
    addSelected(project);
  };

  return {
    projectsContianer,
    listContainer,
    getInput,
    getCurrent,
    currentProject,
    clearProjects,
    clearTodos,
    removeSelected,
    addSelected,
    buildProjects,
    projectInput,
    setListeners,
    swapSelected,
    showProjects,
    showTodos,
    checkTodoName,
  };
})();

export default display;