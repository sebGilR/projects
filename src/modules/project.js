// const projectMethods = () => {
//   const addTodo = (todo) => {
//     this.projects.push(todo)
//   }

//   return { addTodo }
// }

const projectFactory = (name) => {
  const todos = [];
  return { name, todos }
}

const defaultProject = projectFactory('Default');

export { projectFactory, defaultProject }