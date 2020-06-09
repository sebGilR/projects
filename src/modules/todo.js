// const todoMethods = {
// }

const todoFactory = (name, date, description, priority) => {
  let checked = false;
  let priorityVal = priority === 'default' ? 'low' : priority

  return { name, date, description, priorityVal }
}


export default todoFactory
