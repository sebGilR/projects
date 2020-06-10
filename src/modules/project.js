
import display from './displayController';
import Storage from './localStorage'
import todoFactory from './todo';


const projectFactory = (name) => {
  const todos = [];
  return { name, todos }
}

const setDefault = () => {
  localStorage.setItem('default', JSON.stringify(projectFactory('Default')));
}

const addTodo = (project, todo) => {
  project.todos.push(todo);
}

const saveProject = () => {
  let project = projectFactory(display.projectInput());
  Storage.saveItem('project_' + (localStorage.length + 1), Storage.serialized(project));
  display.showProjects();
}

const updateTodos = () => {
  saveTodo()
  display.showTodos();
}


const saveTodo = () => {
  let todo = todoFactory(...display.getInput())
  let project = display.currentProject();
  addTodo(project, todo);
  Storage.saveItem(display.getCurrent().id, Storage.serialized(project));
}

export {
  projectFactory,
  setDefault,
  addTodo,
  saveProject,
  updateTodos
}