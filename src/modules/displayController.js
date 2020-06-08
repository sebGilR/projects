
const display = (() => {

  // Todos
  const projectsContianer = document.getElementById('projects');
  const listContainer = document.getElementById('list');
  const nameField = document.getElementById('name');
  const dateField = document.getElementById('date');
  const descriptionField = document.getElementById('description');
  const priorityField = document.getElementById('priority');
  // Project 
  const projectName = document.querySelector("#project-name")

  return { projectsContianer, listContainer, nameField, dateField, descriptionField, priorityField, projectName }
})()

export default display