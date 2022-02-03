import type { selectedOptions } from '../@types/options'
import { defaultOptions } from './const'

export const getUserPreferences = async () => {
  const data = await chrome.storage.local.get(['options'])
  return (data.options as selectedOptions) || {}
}

export const handleInstall = async (
  details: chrome.runtime.InstalledDetails
) => {
  const existUserPrefs = (await getUserPreferences()) || {}
  chrome.storage.local.set({
    options: { ...defaultOptions, ...existUserPrefs },
  })
}

export const changeIconColor = (tabId: number, color: string) => {
  chrome.action.setIcon({
    tabId,
    path: {
      16: `../../assets/icons/${color}/d_action_icon_16.png`,
      32: `../../assets/icons/${color}/d_action_icon_32.png`,
      48: `../../assets/icons/${color}/d_action_icon_48.png`,
    },
  })
}
