export default {
  get (key) {
    return new Promise((resolve) => {
      chrome.storage.sync.get(key, (res) => {
        resolve(res[ key ])
      });
    })
  },
  set (key, value) {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.set({[ key ]: value}, function(res) {
        resolve(res)
      })
    })
  },
  clear () {
    chrome.storage.sync.clear()
  }
}