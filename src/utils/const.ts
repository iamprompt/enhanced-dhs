export const getGoogleFontCSSUrl = (fontFamily: string[]) => {
  let url = `https://fonts.googleapis.com/css2?display=swap`
  for (const font of fontFamily) {
    url += `&family=${font}`
  }
  return url
}
