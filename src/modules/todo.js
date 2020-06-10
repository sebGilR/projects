const todoProto = {
  checkedStatus = () => {
    console.log(this.checked)
  }
}

const todoFactory = (name, date, description, priority) => {
  let todo = Object.create(todoProto)
  todo.checked = 'testing';
  todo.priorityVal = priority === 'default' ? 'low' : priority;
  todo.description = description;
  todo.date = date;
  todo.name = name;
  return todo
}

const saveTodo = (store, display, addTodo) => {
  let todo = todoFactory(...display[2]())
  let project = display[3]();
  addTodo(project, todo);
  store[0](display[4]().id, store[1](project));
}

export { todoFactory, saveTodo }
