const todoFactory = (name, date, description, priority) => {
  let checked = false;
  let priorityVal = priority === 'default' ? 'low' : priority;
  return { checked, priorityVal, description, date, name }
}

const checkedStatus = () => {
  console.log('calling checked status prototype');
}

const saveTodo = (store, display, addTodo) => {
  let todo = todoFactory(...display[2]());
  let project = display[3]();
  addTodo(project, todo);
  store[0](display[4]().id, store[1](project));
}

export { todoFactory, saveTodo, checkedStatus }
