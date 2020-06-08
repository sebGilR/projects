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

const savedProjects = []

for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i) != "undefined") {
    savedProjects.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  }
}
console.log(savedProjects[0])

let selectedProject = document.querySelector('.selected_project');

const saveTodo = () => {
  let todo = todoFactory(...getInput())
  console.log(todo)
  let serialized = JSON.stringify(todoFactory(...getInput()))

  localStorage.setItem('project_' + todo.name, serialized)

  console.log(JSON.parse(localStorage.getItem(todo.name)))
}

const saveProject = () => {
    let project = Project.projectFactory(getProjectInput())
    console.log(project)
    let serialized = JSON.stringify(project)
    localStorage.setItem('project_' + project.name, serialized)
    // console.log(JSON.parse(localStorage.getItem(project.name)))
  }

  const getProjectInput = () => {
    const name = display.projectName.value
    return name;
  };


const formProjectSubmit = document.querySelector(".form-submit-project")
formProjectSubmit.addEventListener("click", saveProject, false)

const formSubmit = document.querySelector(".form-submit")
formSubmit.addEventListener("click", saveTodo, false)

Project.defaultProject.projects.push(test);
