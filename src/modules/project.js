// const projectMethods = () => {
//   const addTodo = (todo) => {
//     this.projects.push(todo)
//   }

//   return { addTodo }
// }

const projectFactory = (name) => {
  const projects = [];
  return { name, projects }
}

const defaultProject = projectFactory('Default');

export { projectFactory, defaultProject }