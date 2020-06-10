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

const saveProject = (store, display) => {
  let project = projectFactory(display[0]());
  store[0]('project_' + (localStorage.length + 1), store[1](project));
}

export {
  projectFactory,
  setDefault,
  addTodo,
  saveProject
}