export type selectedOptions = {
  fontFamily: string
  fontSize: string
  noWatermark: boolean
  edgeStyle: {
    style: string
    color: string
  }
}

export type fontSizeOptions = {
  [key: string]: { text: string; classText: string; plusSize: number; textLocale?: string }
}

export type fontFamilyOptions = {
  [key: string]: { title: string; fontFamily: string; isGoogleFont?: boolean; libUrl?: string[] }
}

export type edgeStyleOptions = {
  [key: string]: { text: string; textLocale?: string; cssStyle?: (color: string) => string }
}
