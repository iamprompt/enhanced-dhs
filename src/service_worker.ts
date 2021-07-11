import { selectedOptions } from './@types/options'

console.log(`Hello Enhanced Disney+ Hotstar`)

const defaultOptions: selectedOptions = {
  fontFamily: 'Roboto',
  fontSize: 0,
  fontWeight: 400,
  fontColor: '#FFFFFF',
  noWatermark: true,
  fontPosition: 0,
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
    chrome.storage.local.set({ options: defaultOptions })
  }
})

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

// chrome.webRequest.onBeforeRequest.addListener(
//   (e) => {
//     console.log(e)
//     // chrome.runtime.sendMessage({ action: 'Fetch Subtitle URL', payload: e.url })
//   },
//   { urls: ['https://api.hotstar.com/play/v2/playback/content/**/*'] },
// )

// chrome.webRequest.onBeforeSendHeaders.addListener(
//   (e) => {
//     if (e.tabId === -1 || e.method !== 'GET') return

//     console.log(e)

//     chrome.declarativeNetRequest.getSessionRules().then((d) => {
//       console.log(d)
//     })

//     chrome.declarativeNetRequest.updateSessionRules({
//       removeRuleIds: [1, 2],
//     })
//     // chrome.runtime.sendMessage({ action: 'Fetch Content Playback', payload: e.url })
//     const { requestHeaders } = e
//     if (!requestHeaders) return
//     // const reqHeaders: { [key: string]: string | undefined } = {}
//     const reqHeaders = new Headers()
//     requestHeaders.forEach((r) => {
//       if (/sec/.test(r.name.toLowerCase())) return
//       reqHeaders.set(r.name, r.value as string)
//     })

//     console.log(reqHeaders)

//     fetch(e.url, { headers: reqHeaders })
//       .then((r) => {
//         // console.log(r)
//         return r.json()
//       })
//       .then((d) => {
//         console.log(d)
//         //@ts-expect-error
//         const selectedPlayback = d.data.playBackSets.find((p) => {
//           // console.log(p)
//           return (
//             p.tagsCombination.includes('fhd') &&
//             p.tagsCombination.includes('stereo') &&
//             p.tagsCombination.includes('h264') &&
//             p.tagsCombination.includes('dash')
//           )
//         })

//         //@ts-expect-error
//         const Playback = d.data.playBackSets.filter((p) => {
//           // console.log(p)
//           return p.tagsCombination.includes('h264')
//         })

//         console.log(selectedPlayback)
//         console.log(Playback)

//         chrome.declarativeNetRequest.updateSessionRules({
//           addRules: [
//             {
//               id: 1,
//               condition: {
//                 urlFilter: 'https://*.hotstar.com/videos/*/*.mpd*',
//               },
//               action: {
//                 //@ts-expect-error
//                 type: 'redirect',
//                 redirect: {
//                   url: selectedPlayback.playbackUrl,
//                 },
//               },
//             },
//             {
//               id: 2,
//               condition: {
//                 urlFilter: 'https://*.expressplay.com/*',
//               },
//               action: {
//                 //@ts-expect-error
//                 type: 'redirect',
//                 redirect: {
//                   url: selectedPlayback.licenceUrl,
//                 },
//               },
//             },
//           ],
//         })
//       })
//   },
//   { urls: ['https://api.hotstar.com/play/v2/playback/content/*'] },
//   ['requestHeaders'],
// )
