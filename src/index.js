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

const getInput = () =>{
   const name = display.nameField.value
   const date = display.dateField.value
   const description = display.descriptionField.value
   const priority = display.priorityField.value
   return {name,date,description,priority}
}

const formSubmit = document.querySelector(".form-submit")
formSubmit.addEventListener("click",getInput,false)

Project.defaultProject.projects.push(test);

console.log(Project.defaultProject);