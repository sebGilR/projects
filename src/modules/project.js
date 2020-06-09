
const projectFactory = (name) => {
  const todos = [];
  return { name, todos }
}

const setDefault = () => {
  localStorage.setItem('default', JSON.stringify(projectFactory('Default')));
}

export { projectFactory, setDefault }