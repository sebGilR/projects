import './style.scss';
import display from './modules/displayController';
import * as  Project from './modules/project';
import * as Todo from './modules/todo'
import Storage from './modules/localStorage'

// Parameters for actions 
const storeData = [Storage.saveItem, Storage.serialized];
const displayData = [display.projectInput, display.showProjects, display.getInput, display.currentProject, display.getCurrent];

// set default project
if (localStorage.getItem('default') === null) {
  Project.setDefault();
}
const updateTodos = () => {
  Todo.saveTodo(storeData, displayData, Project.addTodo);
  display.showTodos();
}

const updateProject = () => {
  Project.saveProject(storeData, displayData);
  display.showProjects();
}

const loader = (() => {
  display.setListeners(updateProject, updateTodos);
  display.showProjects();
  display.showTodos();
})();

