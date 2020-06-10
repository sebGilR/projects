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
  // set default project
  if (localStorage.getItem('default') === null) {
    Project.setDefault()
  }
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

  const showTodos = () => {
    let project = JSON.parse(localStorage.getItem(display.getCurrent().id));
    display.clearTodos();
    let item;
    for (let i = 0; i < project.todos.length; i++) {
      item = document.createElement('LI');
      item.innerText = project.todos[i].name;
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

  const addSelected = (project) => {
    project.classList.add('selected');
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