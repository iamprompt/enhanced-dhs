import { onMessage } from 'webext-bridge'
import { changeIconColor, handleInstall } from '../utils/chrome'

console.log('Hello Enhanced Disney+ Hotstar')

// Listen for installation
chrome.runtime.onInstalled.addListener(handleInstall)

// Listem for scheme change -> change icon color
onMessage<{ color: string }, string>(
  'scheme-icon-change',
  ({ data, sender }) => {
    // console.log('scheme-icon-change', data)
    sender.tabId && changeIconColor(sender.tabId, data.color || 'light')
  }
)

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
//             p.tagsCombination.includes('dolby51') &&
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
//   ['requestHeaders']
// )
