export default {
  setLocalStorageItem: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getLocalStorageItem: function (key) {
    return JSON.parse(localStorage.getItem(key));
  },


  removeLocalStorageItem: function (key) {
    localStorage.removeItem(key);
  }
}



