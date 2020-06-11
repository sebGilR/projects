const Storage = (() => {
  const saveItem = (itemName, item) => {
    localStorage.setItem(itemName, item);
  };

  const getItem = (itemName) => JSON.parse(localStorage.getItem(itemName));

  const serialized = (project) => JSON.stringify(project);


  return {
    saveItem,
    getItem,
    serialized,
  };
})();

export default Storage;