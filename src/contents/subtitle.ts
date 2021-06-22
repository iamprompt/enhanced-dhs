import { edgeStyleOptions, fontFamilyOptions, fontSizeOptions, selectedOptions } from '../@types/options'
import { getlinkHTMLHeader } from '../utils/htmlElems'

const FontOptions: fontFamilyOptions = {
  Roboto: { title: 'Roboto', fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif' },
  Prompt: { title: 'Prompt (ไทย)', fontFamily: '"Prompt", sans-serif', isGoogleFont: true },
  Kanit: { title: 'Kanit (ไทย)', fontFamily: '"Kanit", sans-serif', isGoogleFont: true },
  Sarabun: { title: 'Sarabun (ไทย)', fontFamily: '"Sarabun", sans-serif', isGoogleFont: true },
  'IBM+Plex+Sans+Thai': {
    title: 'IBM Plex Sans (ไทย)',
    fontFamily: '"IBM Plex Sans Thai", sans-serif',
    isGoogleFont: false,
    libUrl: ['https://cdn.lazywasabi.net/fonts/IBMPlexSansThai/IBMPlexSansThai.css'],
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
  if (req.changes) {
    const dhsInjectElems = document.querySelectorAll('[enhanced-dhs]')
    if (dhsInjectElems.length > 0) {
      dhsInjectElems.forEach((elem) => {
        elem.remove()
      })
    }

    document.head.append(await getStyleSheet())
  }
})
