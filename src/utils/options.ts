import { edgeStyleOptions, fontFamilyOptions, fontSizeOptions } from '../@types/options'

export const FontOptions: fontFamilyOptions = {
  Roboto: {
    title: 'Roboto',
    category: 'Default',
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
    title: 'Prompt',
    category: 'Thai',
    fontFamily: '"Prompt", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Kanit: { title: 'Kanit', category: 'Thai', fontFamily: '"Kanit", system-ui, sans-serif', isGoogleFont: true },
  Sarabun: {
    title: 'Sarabun',
    category: 'Thai',
    fontFamily: '"Sarabun", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'IBM+Plex+Sans+Thai': {
    title: 'IBM Plex Sans',
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
