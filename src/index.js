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

Project.defaultProject.projects.push(test);

console.log(Project.defaultProject);