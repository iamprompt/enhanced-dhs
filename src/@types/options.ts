export type selectedOptions = {
  fontFamily: string
  fontSize: string
  fontWeight: number
  fontColor: string
  noWatermark: boolean
  edgeStyle: {
    style: string
    color: string
  }
}

export type fontSizeOptions = {
  [key: string]: { text: string; classText: string; plusSize: number; textLocale?: string }
}

export type fontFamily = {
  title: string
  weight: number[]
  defaultFontWeight: number
  category: string
  fontFamily: string
  isGoogleFont?: boolean
  libUrl?: string[]
}

export type fontFamilyOptions = {
  [key: string]: fontFamily
}

export type edgeStyleOptions = {
  [key: string]: { text: string; textLocale?: string; cssStyle?: (color: string) => string }
}

export type FontCategoryOptions = {
  [key: string]: {
    [key: string]: fontFamily
  }
}

export type fontWeightsText = {
  [key: number]: string
}
