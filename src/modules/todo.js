const todoFactory = (name, date, description, priority) => {
  const checked = false;
  const priorityVal = priority === 'default' ? 'low' : priority;
  return {
    checked, priorityVal, description, date, name,
  };
};

const saveTodo = (store, display, addTodo) => {
  const todo = todoFactory(...display[2]());
  const project = display[3]();
  addTodo(project, todo);
  store[0](display[4]().id, store[1](project));
};

export { todoFactory, saveTodo };
