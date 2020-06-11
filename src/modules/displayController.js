import Storage from './localStorage'

const display = (() => {
// todoInfoObj being used for editing todos
  var todoInfoObj;

  const testInput = (field, button) => {
    if (field.value === '') {
      button.classList.add('hidden');
      field.classList.add('missing');
    } else {
      button.classList.remove('hidden');
      field.classList.remove('missing');
    }
  }

  const clearField = (field) => {
    field.value = "";
  }
  const bodyElement = document.querySelector('body')
  // Todos
  const listContainer = document.getElementById('list');

  const nameField = document.getElementById('name');
  const dateField = document.getElementById('date');
  const descriptionField = document.getElementById('description');
  const priorityField = document.getElementById('priority');

  const formSubmit = document.querySelector(".form-submit");

  const checkTodoName = () => {
    testInput(nameField, formSubmit);
  }

  const getInput = () => {
    const name = nameField.value
    const date = dateField.value
    const description = descriptionField.value
    const priority = priorityField.value
    return [name, date, description, priority]
  };

  const getEditInput = () => {
    const form = document.querySelector('.formClone');
    const name = form.querySelector('#name').value
    const date = form.querySelector('#date').value
    const description = form.querySelector('#description').value
    return {name, date, description}
  }

  const selectProject = (e) => {
    let project = e.target;
    display.swapSelected(project);
    showTodos();
  }

  const deleteThis = (e) => {
    let index = parseInt((e.target.parentNode.dataset.indexNumber))
    let parentProject = getCurrent().id
    let parentObj = JSON.parse(localStorage[parentProject]);
    parentObj.todos.splice(index, 1);
    localStorage.setItem(parentProject, Storage.serialized(parentObj));
    showTodos();
  }


  const createEditMenu = (todo) => {
    let cloneForm = document.querySelector("#form").cloneNode(true)
    cloneForm.classList.add("formClone")
    let title = document.createElement('h1')
    title.innerHTML = 'Edit Todo'
    cloneForm.prepend(title)
    cloneForm.querySelector("#name").value = todo.name
    cloneForm.querySelector("#date").value = todo.date
    cloneForm.querySelector("#description").value = todo.description
    let button = document.createElement('button')
    button.innerHTML = 'Save'
    button.className ='btn btn-success'
    button.addEventListener('click',saveAndUpdate,false);
    cloneForm.appendChild(button)
    return cloneForm
  }
  // with target event get localstorage obj and return a formatted obj of the todos information
  const getStorageObj = (event) => {
    let index = parseInt((event.target.parentNode.dataset.indexNumber))
    let parentName = getCurrent().id
    let parentObj = JSON.parse(localStorage[parentName]);
    let todo = parentObj.todos[index]
    return {parentObj, todo, index, parentName}
  }

  const saveAndUpdate = (event) => {
    let node = event.target.parentNode
    node.classList.add('hidden')
    // format the edit menu user input into an object
    let inputInfo = getEditInput()
    // remove the clone form after getting input
    bodyElement.removeChild(node)
    // update parentObj with edit menu inputs
    todoInfoObj.parentObj.todos[todoInfoObj.index].name = inputInfo.name
    todoInfoObj.parentObj.todos[todoInfoObj.index].date = inputInfo.date
    todoInfoObj.parentObj.todos[todoInfoObj.index].description = inputInfo.description
    // <-->
    localStorage.setItem(todoInfoObj.parentName, Storage.serialized(todoInfoObj.parentObj))
    showTodos();
  }
  
  const editTodo = (event) => {
    // returns a formmated obj from the localStorage using target event
    todoInfoObj = getStorageObj(event)
    // create an edit menu with target event Todo information
    let editFormDiv = createEditMenu(todoInfoObj.todo)
    bodyElement.appendChild(editFormDiv)
  }

  const updateThis = (event) =>{ 
    let todoIndex = (event.target.parentNode.dataset.indexNumber)
  }

  // creates a button element with the name of the object in question as the ID
  const deleteButton = () => {
    let button = document.createElement('button')
    button.className = "btn btn-danger delete-todo"
    button.innerHTML = "Delete Todo"
    button.addEventListener("click", deleteThis, false)
    return button
  }

  const editButton = () => {
    let button = document.createElement('button')
    button.className = "btn btn-info update-todo"
    button.innerHTML = "Edit"
    button.addEventListener("click", editTodo, false)
    return button
  }

  const createTodoLi = (todo,index) => {
    let item = document.createElement('LI');
    item.innerText = todo.name;
    let deletebtn = deleteButton();
    let editbtn = editButton();
    item.appendChild(deletebtn);
    item.setAttribute('data-index-number', index)
    item.appendChild(editbtn);
    return item
  }

  const showTodos = () => {
    clearField(nameField);
    let project = JSON.parse(localStorage.getItem(getCurrent().id));
    clearTodos();
    let item;
    for (let i = 0; i < project.todos.length; i++) {
      item = createTodoLi(project.todos[i],i)
      display.listContainer.appendChild(item);
    }
  }

  const clearTodos = () => {
    listContainer.innerHTML = "";
  }

  // Project 
  const projectName = document.querySelector("#project-name");
  const projectsContianer = document.getElementById('projects');
  const formProjectSubmit = document.querySelector(".form-submit-project");

  const showProjects = () => {
    clearField(projectName);
    clearProjects();
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) != "undefined") {
        const current = Storage.getItem(localStorage.key(i))
        const item = document.createElement('LI');
        const key = localStorage.key(i)
        buildProjects(current, item, key, selectProject);
      }
    }
  }

  const checkProjectName = () => {
    testInput(projectName, formProjectSubmit);
  }

  const getCurrent = () => document.querySelector('.selected');
  const currentProject = () => JSON.parse(localStorage.getItem(display.getCurrent().id));

  const clearProjects = () => {
    projectsContianer.innerHTML = "";
  }

  const removeSelected = () => {
    display.projectsContianer.childNodes.forEach(item => item.classList.remove('selected'));
  }

  const addSelected = (element) => {
    element.classList.add('selected');
  }

  const buildProjects = (project, item, key, clickEvent) => {
    item.innerText = project.name;
    item.setAttribute('id', key);
    item.addEventListener('click', clickEvent);
    key === 'default' ? item.classList.add('selected') : false;
    projectsContianer.appendChild(item);
  }

  const projectInput = () => projectName.value;

  const setListeners = (saveProject, updateTodos) => {
    formProjectSubmit.addEventListener("click", saveProject, false);
    formSubmit.addEventListener("click", updateTodos, false);
    nameField.addEventListener('keyup', checkTodoName, false);
    projectName.addEventListener('keyup', checkProjectName, false);
  }

  const swapSelected = (project) => {
    removeSelected();
    addSelected(project);
  }

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
    checkTodoName
  }

})()

export default display