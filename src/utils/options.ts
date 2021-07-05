import { edgeStyleOptions, fontFamilyOptions, fontSizeOptions, fontWeightsText } from '../@types/options'

export const FontOptions: fontFamilyOptions = {
  Roboto: {
    title: 'Roboto',
    weight: [100, 300, 400, 500, 700, 900],
    defaultFontWeight: 400,
    category: 'Default',
    fontFamily: '"Roboto", "HelveticaNeue-Light", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'Roboto+Condensed': {
    title: 'Roboto Condensed',
    weight: [300, 400, 700],
    defaultFontWeight: 400,
    category: 'English',
    fontFamily: '"Roboto Condensed", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Courgette: {
    title: 'Courgette',
    weight: [400],
    defaultFontWeight: 400,
    category: 'English',
    fontFamily: '"Courgette", system-ui, cursive',
    isGoogleFont: true,
  },
  'Exo+2': {
    title: 'Exo 2',
    weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    defaultFontWeight: 400,
    category: 'English',
    fontFamily: '"Exo 2", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'Ubuntu+Mono': {
    title: 'Ubuntu Mono',
    weight: [400, 700],
    defaultFontWeight: 400,
    category: 'English',
    fontFamily: '"Ubuntu Mono", system-ui, monospace',
    isGoogleFont: true,
  },
  'Sree+Krushnadevaraya': {
    title: 'Sree Krushnadevaraya',
    weight: [400],
    defaultFontWeight: 400,
    category: 'English',
    fontFamily: '"Sree Krushnadevaraya", system-ui, serif',
    isGoogleFont: true,
  },
  Prompt: {
    title: 'Prompt — พร้อม',
    weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Prompt", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Kanit: {
    title: 'Kanit — คณิต',
    weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Kanit", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Sarabun: {
    title: 'Sarabun — สารบรรณ',
    weight: [100, 200, 300, 400, 500, 600, 700, 800],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Sarabun", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Maitree: {
    title: 'Maitree — ไมตรี',
    weight: [200, 300, 400, 500, 600, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Maitree", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'Chakra+Petch': {
    title: 'Chakra Petch — จักรเพชร',
    weight: [300, 400, 500, 600, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Chakra Petch", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Taviraj: {
    title: 'Taviraj — ทวิราช',
    weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Taviraj", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'Bai+Jamjuree': {
    title: 'Bai Jamjuree — ใบจามจุรี',
    weight: [200, 300, 400, 500, 600, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Bai Jamjuree", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Sriracha: {
    title: 'Sriracha — ศรีราชา',
    weight: [400],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Sriracha", system-ui, sans-serif',
    isGoogleFont: true,
  },
  K2D: {
    title: 'K2D — เคทูดี',
    weight: [100, 200, 300, 400, 500, 600, 700, 800],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"K2D", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Mitr: {
    title: 'Mitr — มิตร',
    weight: [200, 300, 400, 500, 600, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Mitr", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Itim: {
    title: 'Itim — ไอติม',
    weight: [400],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Itim", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Pridi: {
    title: 'Pridi — ปรีดี',
    weight: [200, 300, 400, 500, 600, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Pridi", system-ui, sans-serif',
    isGoogleFont: true,
  },
  Chonburi: {
    title: 'Chonburi — ชลบุรี',
    weight: [400],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Chonburi", system-ui, sans-serif',
    isGoogleFont: true,
  },
  'IBM+Plex+Sans+Thai': {
    title: 'IBM Plex Sans Thai',
    weight: [400, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"IBM Plex Sans Thai", system-ui, sans-serif',
    isGoogleFont: false,
    libUrl: ['https://cdn.lazywasabi.net/fonts/IBMPlexSansThai/IBMPlexSansThai.css'],
  },
  'IBM+Plex+Sans+Thai+Looped': {
    title: 'IBM Plex Sans Thai Looped',
    weight: [400, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"IBM Plex Sans Thai Looped", system-ui, sans-serif',
    isGoogleFont: false,
    libUrl: ['https://cdn.lazywasabi.net/fonts/IBMPlexSansThaiLooped/IBMPlexSansThaiLooped.css'],
  },
  'Noto+Sans': {
    title: 'Noto Sans Thai',
    weight: [400, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Noto Sans Thai", "Noto Sans", system-ui, sans-serif',
    isGoogleFont: true,
    libUrl: ['https://cdn.lazywasabi.net/fonts/NotoSansThai/NotoSansThai.css'],
  },
  'Noto+Serif': {
    title: 'Noto Serif Thai',
    weight: [400, 700],
    defaultFontWeight: 400,
    category: 'Thai',
    fontFamily: '"Noto Serif Thai", "Noto Serif", system-ui, serif',
    isGoogleFont: true,
    libUrl: ['https://cdn.lazywasabi.net/fonts/NotoSerifThai/NotoSerifThai.css'],
  },
  'Long+Cang': {
    title: 'Long Cang',
    weight: [400],
    defaultFontWeight: 400,
    category: 'Chinese',
    fontFamily: '"Long Cang", system-ui, cursive',
    isGoogleFont: true,
  },
  'Ma+Shan+Zheng': {
    title: 'Ma Shan Zheng',
    weight: [400],
    defaultFontWeight: 400,
    category: 'Chinese',
    fontFamily: '"Ma Shan Zheng", system-ui, cursive',
    isGoogleFont: true,
  },
  'Zhi+Mang+Xing': {
    title: 'Zhi Mang Xing',
    weight: [400],
    defaultFontWeight: 400,
    category: 'Chinese',
    fontFamily: '"Zhi Mang Xing", system-ui, cursive',
    isGoogleFont: true,
  },
}

export const FontSizeOptions: fontSizeOptions = {
  normal: { text: 'Normal', classText: 'text-sm', plusSize: 0, textLocale: 'popupFontSizeNormalText' },
  large: { text: 'Large', classText: 'text-base', plusSize: 25, textLocale: 'popupFontSizeLargeText' },
  huge: { text: 'Huge', classText: 'text-xl', plusSize: 50, textLocale: 'popupFontSizeHugeText' },
}

export const EdgeStyleOptions: edgeStyleOptions = {
  none: { text: 'None', textLocale: 'popupEdgeNoneText' },
  outline: {
    text: 'Outline',
    textLocale: 'popupEdgeOutlineText',
    cssStyle: (color: string) =>
      `text-shadow: -3px -3px 0 ${color}, 0 -3px 0 ${color}, 3px -3px 0 ${color}, 3px 0 0 ${color}, 3px 3px 0 ${color}, 0 3px 0 ${color}, -3px 3px 0 ${color}, -3px 0 0 ${color};`,
  },
  dropShadow: {
    text: 'Drop Shadow',
    textLocale: 'popupEdgeDropShadowText',
    cssStyle: (color: string) => `text-shadow: ${color} 2px 2px 2.5px, ${color} 2px 2px 3.5px, ${color} 2px 2px 4.5px`,
  },
}

export const fontWeightText: fontWeightsText = {
  100: 'Thin',
  200: 'Extra Light',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semi Bold',
  700: 'Bold',
  800: 'Extra Bold',
  900: 'Black',
}

export const colorOptions: string[] = [
  '#FFFFFF',
  '#000000',
  '#E50914',
  '#FCBE11',
  '#0000C8',
  '#FF01B3',
  '#00C800',
  '#009FDA',
]
