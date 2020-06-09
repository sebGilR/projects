
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

export {
  projectFactory,
  setDefault,
  addTodo
}