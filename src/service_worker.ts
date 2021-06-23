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

const IconData = {
  default: {
    '16': 'assets/icon/d_action_icon_default16.png',
    '32': 'assets/icon/d_action_icon_default32.png',
    '48': 'assets/icon/d_action_icon_default48.png',
  },
  light: {
    '16': 'assets/icon/d_action_icon_dark16.png',
    '32': 'assets/icon/d_action_icon_dark32.png',
    '48': 'assets/icon/d_action_icon_dark48.png',
  },
  dark: {
    '16': 'assets/icon/d_action_icon_light16.png',
    '32': 'assets/icon/d_action_icon_light32.png',
    '48': 'assets/icon/d_action_icon_light48.png',
  },
}

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.sync.set({ options: defaultOptions })
  }
})

// chrome.webRequest.onBeforeRequest.addListener(
//   (e) => {
//     // console.log(e)
//     chrome.runtime.sendMessage({ action: 'Fetch Subtitle URL', payload: e.url })
//   },
//   { urls: ['https://*.hotstar.com/videos/*/*.vtt'] },
// )

chrome.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
  // console.log(req)

  if (req.action === `Watch Media Scheme Action Icon`) {
    if (req.payload === `light`) {
      chrome.action.setIcon({
        tabId: sender.tab?.id || 0,
        path: IconData.light,
      })
    } else {
      chrome.action.setIcon({
        tabId: sender.tab?.id || 0,
        path: IconData.dark,
      })
    }
  }
})
