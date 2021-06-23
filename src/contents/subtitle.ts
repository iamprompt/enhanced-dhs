import { edgeStyleOptions, fontFamilyOptions, fontSizeOptions, selectedOptions } from '../@types/options'
import { getlinkHTMLHeader } from '../utils/htmlElems'

const FontOptions: fontFamilyOptions = {
  Roboto: {
    title: 'Roboto',
    category: 'English',
    fontFamily: '"Roboto", "HelveticaNeue-Light", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'Roboto+Condensed': {
    title: 'Roboto Condensed',
    category: 'English',
    fontFamily: '"Roboto Condensed", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Courgette: {
    title: 'Courgette',
    category: 'English',
    fontFamily: '"Courgette", system-ui, cursive',
    isGoogleFont: true,
  },
  'Exo+2': {
    title: 'Exo 2',
    category: 'English',
    fontFamily: '"Exo 2", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'Ubuntu+Mono': {
    title: 'Ubuntu Mono',
    category: 'English',
    fontFamily: '"Ubuntu Mono", system-ui, monospace',
    isGoogleFont: true,
  },
  'Sree+Krushnadevaraya': {
    title: 'Sree Krushnadevaraya',
    category: 'English',
    fontFamily: '"Sree Krushnadevaraya", system-ui, serif',
    isGoogleFont: true,
  },
  Prompt: {
    title: 'Prompt (ไทย)',
    category: 'Thai',
    fontFamily: '"Prompt", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Kanit: { title: 'Kanit (ไทย)', category: 'Thai', fontFamily: '"Kanit", system-ui, sans-serif', isGoogleFont: true },
  Sarabun: {
    title: 'Sarabun (ไทย)',
    category: 'Thai',
    fontFamily: '"Sarabun", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'IBM+Plex+Sans+Thai': {
    title: 'IBM Plex Sans (ไทย)',
    category: 'Thai',
    fontFamily: '"IBM Plex Sans Thai", system-ui, sans-serif',
    isGoogleFont: false,
    libUrl: ['https://cdn.lazywasabi.net/fonts/IBMPlexSansThai/IBMPlexSansThai.css'],
  },
  'Long+Cang': {
    title: 'Long Cang',
    category: 'Chinese',
    fontFamily: '"Long Cang", system-ui, cursive',
    isGoogleFont: true,
  },
  'Ma+Shan+Zheng': {
    title: 'Ma Shan Zheng',
    category: 'Chinese',
    fontFamily: '"Ma Shan Zheng", system-ui, cursive',
    isGoogleFont: true,
  },
  'Zhi+Mang+Xing': {
    title: 'Zhi Mang Xing',
    category: 'Chinese',
    fontFamily: '"Zhi Mang Xing", system-ui, cursive',
    isGoogleFont: true,
  },
}

const FontSizeOptions: fontSizeOptions = {
  normal: { text: 'Normal', classText: 'text-sm', plusSize: 0 },
  large: { text: 'Large', classText: 'text-base', plusSize: 10 },
  huge: { text: 'Huge', classText: 'text-xl', plusSize: 20 },
}

const EdgeStyleOptions: edgeStyleOptions = {
  none: { text: 'None' },
  outline: {
    text: 'Outline',
    cssStyle: (color: string) => `-1px 0 ${color}, 0 1px ${color}, 1px 0 ${color}, 0 -1px ${color};`,
  },
  dropShadow: {
    text: 'Drop Shadow',
    cssStyle: (color: string) => `${color} 2px 2px 2.5px, ${color} 2px 2px 3.5px, ${color} 2px 2px 4.5px`,
  },
}

const winMedia = window.matchMedia('(prefers-color-scheme: light)')
chrome.runtime.sendMessage({
  action: `Watch Media Scheme Action Icon`,
  payload: winMedia.matches ? `light` : `dark`,
})

winMedia.addEventListener('change', (e) => {
  chrome.runtime.sendMessage({
    action: `Watch Media Scheme Action Icon`,
    payload: e.matches ? `light` : `dark`,
  })
})

const getSelectedOptionsStorage = () => {
  return new Promise<selectedOptions>((resolve, reject) => {
    try {
      chrome.storage.sync.get(['options'], (data) => {
        const localOptions = data.options as selectedOptions
        // console.log(localOptions)

        resolve(localOptions)
      })
    } catch (error) {
      reject(error)
    }
  })
}

const getStyleSheet = async () => {
  const selectedOptions = await getSelectedOptionsStorage()

  // Create Style Tag for override elements' style
  const styleCSS = document.createElement('style')

  styleCSS.setAttribute('enhanced-dhs', '')

  if (selectedOptions) {
    // Change Subtitle Font
    if (FontOptions[selectedOptions.fontFamily]) {
      // Add Google Font Stylesheet
      if (FontOptions[selectedOptions.fontFamily].isGoogleFont) {
        const preloadGstatic = getlinkHTMLHeader.preloadFontGstatic()
        const fontStyleSheet = getlinkHTMLHeader.loadStyleSheet.googleFont([selectedOptions.fontFamily])
        document.head.append(preloadGstatic, fontStyleSheet)
      }

      // Add Additional Font Stylesheet
      FontOptions[selectedOptions.fontFamily].libUrl?.forEach((url: string) => {
        const fontStyleSheet = getlinkHTMLHeader.loadStyleSheet.url(url)
        document.head.append(fontStyleSheet)
      })

      styleCSS.textContent += `.subtitle-container .shaka-text-container span {font-family: ${
        FontOptions[selectedOptions.fontFamily].fontFamily
      } !important;}` // Change Subtitle Font
    }
  }

  // Add Transparent Subtitle Background
  styleCSS.textContent += `.subtitle-container .shaka-text-container span {background-color: transparent !important;}`

  if (FontSizeOptions[selectedOptions.fontSize]) {
    styleCSS.textContent += `.subtitle-container {font-size: ${
      28 + FontSizeOptions[selectedOptions.fontSize].plusSize
    }px !important;} @media (max-width: 768px) {.subtitle-container {font-size: ${
      16 + FontSizeOptions[selectedOptions.fontSize].plusSize
    }px !important;}}`
  }

  if (EdgeStyleOptions[selectedOptions.edgeStyle.style]) {
    const cssEdgeStyle = EdgeStyleOptions[selectedOptions.edgeStyle.style].cssStyle?.('black')
    if (cssEdgeStyle) {
      styleCSS.textContent += `.subtitle-container .shaka-text-container span {text-shadow: ${cssEdgeStyle}}`
    }
  }

  if (selectedOptions.noWatermark) {
    // Remove D+HS Icon in fullscreen
    styleCSS.textContent += `.watermark-content {display: none !important;}`
  }

  return styleCSS
}

;(async () => {
  const styleCSS = await getStyleSheet()
  document.head.append(styleCSS)
})()

chrome.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
  if (req.action === `Change Subtitle Style` && req.payload) {
    const dhsInjectElems = document.querySelectorAll('[enhanced-dhs]')
    if (dhsInjectElems.length > 0) {
      dhsInjectElems.forEach((elem) => {
        elem.remove()
      })
    }

    document.head.append(await getStyleSheet())
  }
})
