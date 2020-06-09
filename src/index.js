import './style.scss';
import display from './modules/displayController';
import todoFactory from './modules/todo';
import * as  Project from './modules/project';
import Storage from './modules/localStorage'

if (localStorage.getItem('default') === undefined) {
  Project.setDefault()
}

const serialized = (project) => {
  return JSON.stringify(project)
}

// TODOS
const saveTodo = () => {
  let todo = todoFactory(...display.getInput())
  let project = display.currentProject();
  Project.addTodo(project, todo);
  Storage.saveItem(display.getCurrent().id, serialized(project));
  showTodos();
}

const selectProject = (e) => {
  let project = e.target;
  display.removeSelected();
  display.addSelected(project);
  showTodos();
}

const showProjects = () => {
  display.clearProjects();
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "undefined") {
      let current = Storage.getItem(localStorage.key(i))
      let item = document.createElement('LI');
      item.innerText = current.name;
      item.setAttribute('id', localStorage.key(i));
      item.addEventListener('click', selectProject);
      localStorage.key(i) === 'default' ? item.classList.add('selected') : false;
      display.projectsContianer.appendChild(item);
    }
  }
}

const showTodos = () => {
  let project = JSON.parse(localStorage.getItem(display.getCurrent().id));
  console.log(project)
  display.clearTodos();
  let item;
  for (let i = 0; i < project.todos.length; i++) {
    item = document.createElement('LI');
    item.innerText = project.todos[i].name;
    display.listContainer.appendChild(item);
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

const formProjectSubmit = document.querySelector(".form-submit-project");
formProjectSubmit.addEventListener("click", saveProject, false);

const formSubmit = document.querySelector(".form-submit");
formSubmit.addEventListener("click", saveTodo, false);

const loader = () => {
  showProjects();
  showTodos();
}

loader();
