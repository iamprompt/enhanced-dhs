import { edgeStyleOptions, fontFamilyOptions, fontSizeOptions } from '../@types/options'

export const FontOptions: fontFamilyOptions = {
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

export const FontSizeOptions: fontSizeOptions = {
  normal: { text: 'Normal', classText: 'text-sm', plusSize: 0, textLocale: 'popupFontSizeNormalText' },
  large: { text: 'Large', classText: 'text-base', plusSize: 10, textLocale: 'popupFontSizeLargeText' },
  huge: { text: 'Huge', classText: 'text-xl', plusSize: 20, textLocale: 'popupFontSizeHugeText' },
}

export const EdgeStyleOptions: edgeStyleOptions = {
  none: { text: 'None', textLocale: 'popupEdgeNoneText' },
  outline: {
    text: 'Outline',
    textLocale: 'popupEdgeOutlineText',
    cssStyle: (color: string) => `-1px 0 ${color}, 0 1px ${color}, 1px 0 ${color}, 0 -1px ${color};`,
  },
  dropShadow: {
    text: 'Drop Shadow',
    textLocale: 'popupEdgeDropShadowText',
    cssStyle: (color: string) => `${color} 2px 2px 2.5px, ${color} 2px 2px 3.5px, ${color} 2px 2px 4.5px`,
  },
}
