console.log(`Hello Enhanced Disney+ Hotstar`)

const defaultOptions = {
  fontFamily: 'Roboto',
  fontSize: 'normal',
  noWatermark: true,
  edgeStyle: {
    style: 'none',
    color: 'black',
  },
}

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.sync.set({ options: defaultOptions })
  }
})

chrome.webRequest.onBeforeRequest.addListener(
  (e) => {
    console.log(e)
    chrome.runtime.sendMessage({ action: 'Fetch Subtitle URL', payload: e.url })
  },
  { urls: ['https://*.hotstar.com/videos/*/*.vtt'] },
)
