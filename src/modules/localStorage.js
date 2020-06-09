const Storage = (() => {
  const saveItem = (itemName, item) => {
    localStorage.setItem(itemName, item);
  }

  const getItem = (itemName) => JSON.parse(localStorage.getItem(itemName));

  return {
    saveItem,
    getItem
  }
})();

export default Storage