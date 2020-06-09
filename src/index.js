import './style.scss';
import display from './modules/displayController';
import todoFactory from './modules/todo';
import * as  Project from './modules/project';

const test = todoFactory(
  display.nameField,
  display.dateField,
  display.descriptionField,
  display.priorityField
)


const getInput = () => {
  const name = display.nameField.value
  const date = display.dateField.value
  const description = display.descriptionField.value
  const priority = display.priorityField.value
  return [name, date, description, priority]
};

// TODOS
const saveTodo = () => {
  let todo = todoFactory(...getInput())
  console.log(todo)
  let serialized = JSON.stringify(todoFactory(...getInput()))
  localStorage.setItem('project_' + todo.name, serialized)
  console.log(JSON.parse(localStorage.getItem(todo.name)))
}

// let selectedProject = document.querySelector('.selected_project');
// PROJECTS
const clearProjects = () => {
  display.projectsContianer.innerHTML = "";
}

const selectProject = (e) => {
  let projectId = e.target.id
  console.log(localStorage.getItem(projectId))

}

const showProjects = () => {
  clearProjects();
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "undefined") {
      let current = JSON.parse(localStorage.getItem(localStorage.key(i)));
      let item = document.createElement('LI');
      item.innerText = current.name;
      item.setAttribute('id', localStorage.key(i));
      item.addEventListener('click', selectProject);
      display.projectsContianer.appendChild(item);
    }
  }
}

const saveProject = () => {
  let project = Project.projectFactory(getProjectInput());
  console.log(project);
  let serialized = JSON.stringify(project);
  localStorage.setItem('project_' + (localStorage.length + 1), serialized);
  showProjects();
}

const getProjectInput = () => {
  const name = display.projectName.value
  return name;
};

const formProjectSubmit = document.querySelector(".form-submit-project")
formProjectSubmit.addEventListener("click", saveProject, false)

const formSubmit = document.querySelector(".form-submit")
formSubmit.addEventListener("click", saveTodo, false)

Project.defaultProject.todos.push(test);

window.addEventListener('onload', showProjects())