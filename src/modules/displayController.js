
const display = (() => {
  const projectsContianer = document.getElementById('projects');
  const listContainer = document.getElementById('list');
  const nameField = document.getElementById('name');
  const dateField = document.getElementById('date');
  const descriptionField = document.getElementById('description');
  const priorityField = document.getElementById('priority');

  return { projectsContianer, listContainer, nameField, dateField, descriptionField, priorityField }
})()

export default display