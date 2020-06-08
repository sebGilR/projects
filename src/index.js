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
  // console.log((localStorage.key(i)))
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



const formSubmit = document.querySelector(".form-submit")
formSubmit.addEventListener("click", saveTodo, false)

Project.defaultProject.projects.push(test);

// console.log(Project.defaultProject);