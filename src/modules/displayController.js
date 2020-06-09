
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

  const setListeners = (saveProject, saveTodo) => {
    formProjectSubmit.addEventListener("click", saveProject, false);
    formSubmit.addEventListener("click", saveTodo, false);
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
    swapSelected
  }

})()

export default display