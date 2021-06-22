import { getGoogleFontCSSUrl } from './const'

export const getlinkHTMLHeader = {
  preloadFontGstatic: () => {
    const preGstatic = document.createElement('link')
    preGstatic.setAttribute('enhanced-dhs', '')
    preGstatic.rel = 'preconnect'
    preGstatic.href = 'https://fonts.gstatic.com'

    return preGstatic
  },
  loadStyleSheet: {
    googleFont: (fontFamily: string[]) => {
      const gFont = document.createElement('link')
      gFont.setAttribute('enhanced-dhs', '')
      gFont.rel = 'stylesheet'
      gFont.href = getGoogleFontCSSUrl(fontFamily)
      return gFont
    },
    url: (url: string) => {
      const linkStylesheet = document.createElement('link')
      linkStylesheet.rel = 'stylesheet'
      linkStylesheet.setAttribute('enhanced-dhs', '')
      linkStylesheet.href = url
      return linkStylesheet
    },
  },
}
