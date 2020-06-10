import Storage from './localStorage'

const display = (() => {

  // Todos
  const listContainer = document.getElementById('list');

  const nameField = document.getElementById('name');
  const dateField = document.getElementById('date');
  const descriptionField = document.getElementById('description');
  const priorityField = document.getElementById('priority');

  const formSubmit = document.querySelector(".form-submit");

  const getInput = () => {
    const name = nameField.value
    const date = dateField.value
    const description = descriptionField.value
    const priority = priorityField.value
    return [name, date, description, priority]
  };

  const selectProject = (e) => {
    let project = e.target;
    display.swapSelected(project);
    showTodos();
  }

  const showProjects = () => {
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

  const deleteThis = (e) => {
    let index = parseInt((e.target.parentNode.dataset.indexNumber))
    let parentProject = getCurrent().id
    let parentObj = JSON.parse(localStorage[parentProject]);
    parentObj.todos.splice(index,1);
    localStorage.setItem(parentProject,Storage.serialized(parentObj));
    showTodos();
  }
  
  // creates a button element with the name of the object in question as the ID
  const deleteButton = () => {
    let button = document.createElement('button')
    button.className = "btn btn-danger delete-todo"
    button.innerHTML = "Delete Todo"
    button.addEventListener("click",deleteThis,false)
    return button
  }

  const showTodos = () => {
    let project = JSON.parse(localStorage.getItem(display.getCurrent().id));
    display.clearTodos();
    let item;
    for (let i = 0; i < project.todos.length; i++) {
      item = document.createElement('LI');
      item.innerText = project.todos[i].name;
      let deletebtn = deleteButton();
      item.appendChild(deletebtn);
      item.setAttribute('data-index-number',i)
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
    showTodos
  }

})()

export default display