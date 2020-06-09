import './style.scss';
import display from './modules/displayController';
import todoFactory from './modules/todo';
import * as  Project from './modules/project';

if (localStorage.getItem('default') === undefined) {
  Project.setDefault()
}

// TODOS
const saveTodo = () => {
  let todo = todoFactory(...display.getInput())
  let project = JSON.parse(localStorage.getItem(display.getCurrent().id));
  console.log(project)
  project.todos.push(todo)
  let serialized = JSON.stringify(project);
  localStorage.setItem(display.getCurrent().id, serialized);
  showTodos();
}

// PROJECTS
// const clearProjects = () => {
//   display.projectsContianer.innerHTML = "";
// }

// const clearTodos = () => {
//   display.listContainer.innerHTML = "";
// }

const selectProject = (e) => {
  let project = e.target;

  display.projectsContianer.childNodes.forEach(item => item.classList.remove('selected'));
  project.classList.add('selected');
  console.log(display.projectsContianer.childNodes);
  showTodos();
}

const showProjects = () => {
  display.clearProjects();
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "undefined") {
      let current = JSON.parse(localStorage.getItem(localStorage.key(i)));
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
