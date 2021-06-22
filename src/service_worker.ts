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
