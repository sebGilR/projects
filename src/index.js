import './style.scss';
import display from './modules/displayController';
import todoFactory from './modules/todo';
import * as  Project from './modules/project';
import Storage from './modules/localStorage'

if (localStorage.getItem('default') === null) {
  Project.setDefault()
}

// TODOS
const saveTodo = () => {
  let todo = todoFactory(...display.getInput())
  let project = display.currentProject();
  Project.addTodo(project, todo);
  Storage.saveItem(display.getCurrent().id, Storage.serialized(project));
  showTodos();
}

const selectProject = (e) => {
  let project = e.target;
  display.swapSelected(project);
  showTodos();
}

const showProjects = () => {
  display.clearProjects();
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "undefined") {
      const current = Storage.getItem(localStorage.key(i))
      const item = document.createElement('LI');
      const key = localStorage.key(i)
      display.buildProjects(current, item, key, selectProject);
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

const saveProject = () => {
  let project = Project.projectFactory(display.projectInput());
  Storage.saveItem('project_' + (localStorage.length + 1), Storage.serialized(project));
  showProjects();
}

const loader = () => {
  display.setListeners(saveProject, saveTodo);
  showProjects();
  showTodos();
}

loader();
