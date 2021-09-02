const customUa = 'hello world ua'

const onBeforeSendCallback = (details) => {
  for (var i = 0; i < details.requestHeaders.length; ++i) {
    if (details.requestHeaders[i].name === 'User-Agent') {
      details.requestHeaders.splice(i, 1);
      break;
    }
  }

  details.requestHeaders.push({
    name: 'User-Agent',
    value: customUa
  });

  return { requestHeaders: details.requestHeaders };
}

// 请求发现前监听
const onBeforeSendHeadersListener = () => {
  chrome.webRequest.onBeforeSendHeaders.addListener(
    onBeforeSendCallback,
    { urls: ["<all_urls>"] },
    ["blocking", "requestHeaders"]
  )
}

const onRuntimeMessageListener = () => {
  chrome.runtime.onMessage.addListener(function (msg, sender, callback) {
    if (msg.type === 'getCustomUserAgent') {
      console.log('background监听getCustomUserAgent事件')
      callback({
        customUa
      });
    }
  });
}

const init = () => {
  onRuntimeMessageListener()
  onBeforeSendHeadersListener()
}

init()