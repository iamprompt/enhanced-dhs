import { ChangeEvent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import '../styles/tailwind.css'
import tw from 'twin.macro'

import DIcon from '../assets/D_icon_light.svg'

import { colorOptions, EdgeStyleOptions, FontOptions, FontSizeOptions, fontWeightText } from '../utils/options'
import { FontCategoryOptions, fontFamily, fontFamilyOptions, selectedOptions } from '../@types/options'

const FontSizeBox = tw.div`flex items-center justify-center w-full h-full cursor-pointer bg-white dark:bg-gray-600`

const App = () => {
  const [selectedOpt, setSelectedOpt] = useState<selectedOptions>({
    fontFamily: 'Roboto',
    fontSize: 'normal',
    fontWeight: 400,
    fontColor: '#FFFFFF',
    noWatermark: true,
    edgeStyle: {
      style: 'none',
      color: 'black',
    },
  })
  const [isLoaded, setLoaded] = useState<boolean>(false)
  const [isChanged, setChanged] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<chrome.tabs.Tab>()

  const [isColorPickerOpen, toggleColorPicker] = useState<boolean>(false)

  const FontCategoryOptions: FontCategoryOptions = {}
  Object.entries(FontOptions).forEach(([key, val]) => {
    FontCategoryOptions[val.category] = {
      ...FontCategoryOptions[val.category],
      [key]: val,
    }
  })

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setActiveTab(tabs[0])
    })
    chrome.storage.sync.get(['options'], (data) => {
      const options = data.options as selectedOptions
      setSelectedOpt(options)
      setLoaded(true)
    })
  }, [])

  useEffect(() => {
    // console.log(selectedOpt)
    chrome.storage.sync.set({ options: selectedOpt })
    if (isLoaded && !isChanged) {
      setChanged(true)
    }
    chrome.tabs.sendMessage(activeTab?.id || 0, { action: `Change Subtitle Style`, payload: true })
  }, [selectedOpt])

  const fontFamilySelHandler = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedOpt((prev) => ({
      ...prev,
      fontFamily: e.target.value,
      fontWeight: FontOptions[e.target.value].defaultFontWeight,
    }))

  const fontSizeSelHandler = (selectedSize: string) => setSelectedOpt((prev) => ({ ...prev, fontSize: selectedSize }))

  const ReloadHandler = () => {
    chrome.tabs.reload(activeTab?.id as number)
    window.close()
  }

  return (
    <div className='flex flex-col w-72'>
      <div className='bg-gradient-to-r from-blue-900 to-blue-700 p-3 flex items-center' id='header'>
        <img src={DIcon} alt='Disney' className='h-6' />
        <h1 className='font-bold text-white ml-2 text-lg'>{chrome.i18n.getMessage('appName')}</h1>
      </div>
      <div className='flex-1 text-black dark:text-white dark:from-[#192133] dark:to-[#111826] dark:bg-gradient-to-b'>
        {activeTab?.url?.search('hotstar.com') !== -1 || activeTab?.url?.search('dev=1') !== -1 ? (
          <div id='content' className='p-3 flex flex-col space-y-3'>
            <h2 id='subtitle-title' className='font-bold text-2xl'>
              {chrome.i18n.getMessage('popupSubtitleTitle')}
            </h2>

            <div id='font-family-option'>
              <h3 className='font-bold text-lg text-gray-900 dark:text-gray-50'>
                {chrome.i18n.getMessage('popupFontOptionTitle')}
              </h3>

              <select
                name='font-family'
                id='font-family'
                className='w-full p-1 px-2 border border-gray-300 bg-white dark:bg-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                onChange={fontFamilySelHandler}
                value={selectedOpt?.fontFamily}>
                {Object.entries(FontCategoryOptions).map(([key, val]) => {
                  return (
                    <optgroup label={chrome.i18n.getMessage(`popupFontText${key}`) || key}>
                      {Object.entries(val).map(([k, v]) => {
                        return (
                          <option key={k} value={k}>
                            {v.title}
                          </option>
                        )
                      })}
                    </optgroup>
                  )
                })}
              </select>

              <div className='mt-2 grid grid-cols-3 gap-2'>
                <select
                  name='font-weight'
                  id='font-weight'
                  className='col-span-2 w-full p-1 px-2 border border-gray-300 bg-white dark:bg-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setSelectedOpt((prev) => ({ ...prev, fontWeight: parseInt(e.target.value) }))
                  }
                  value={selectedOpt?.fontWeight}>
                  <optgroup label={FontOptions[selectedOpt.fontFamily].title}>
                    {FontOptions[selectedOpt.fontFamily].weight.map((w) => {
                      return (
                        <option key={`${selectedOpt.fontFamily}-${w}`} value={w}>
                          {fontWeightText[w]}
                        </option>
                      )
                    })}
                  </optgroup>
                </select>
                <div
                  className={`h-full w-full border border-gray-300 rounded-md shadow-sm cursor-pointer`}
                  style={{ backgroundColor: selectedOpt.fontColor }}
                  onClick={() => toggleColorPicker(!isColorPickerOpen)}
                />
              </div>

              {isColorPickerOpen && (
                <div className='mt-2 grid grid-cols-5 gap-1'>
                  {colorOptions.map((c) => {
                    return (
                      <div
                        className='col-span-1 h-8 w-full border border-gray-300 rounded-sm shadow-sm flex justify-center items-center cursor-pointer'
                        style={{ backgroundColor: c }}
                        onClick={() => {
                          setSelectedOpt((prev) => ({ ...prev, fontColor: c }))
                          toggleColorPicker(false)
                        }}>
                        {selectedOpt.fontColor === c && (
                          <span className='material-icons-round text-gray-300 select-none'>check</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div id='font-size-selection'>
              <h3 className='font-bold text-lg text-gray-900 dark:text-gray-50'>
                {chrome.i18n.getMessage('popupFontSizeOptionTitle')}:{' '}
                <span id='font-size-text'>
                  {FontSizeOptions[selectedOpt.fontSize].textLocale
                    ? chrome.i18n.getMessage(FontSizeOptions[selectedOpt.fontSize].textLocale as string)
                    : FontSizeOptions[selectedOpt.fontSize].text}
                </span>
              </h3>
              <div className='grid grid-cols-3 border border-gray-300 shadow-sm divide-x h-8'>
                {Object.entries(FontSizeOptions).map(([key, val]) => {
                  return (
                    <FontSizeBox
                      id={`font-size-${key}`}
                      className={`${val.classText}${
                        selectedOpt?.fontSize === key ? ` bg-gradient-to-r from-blue-900 to-blue-700 text-white` : ``
                      }`}
                      onClick={() => fontSizeSelHandler(key)}>
                      A
                    </FontSizeBox>
                  )
                })}
              </div>
            </div>

            <div id='edge-style-options'>
              <h3 className='font-bold text-lg text-gray-900 dark:text-gray-50'>
                {chrome.i18n.getMessage('popupEdgeStyleOptionTitle')}
              </h3>
              <div>
                <select
                  name='edge-style'
                  id='edge-style'
                  className='w-full p-1 px-2 border border-gray-300 bg-white dark:bg-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  onChange={(e) =>
                    setSelectedOpt((prev) => ({ ...prev, edgeStyle: { ...prev.edgeStyle, style: e.target.value } }))
                  }
                  value={selectedOpt?.edgeStyle?.style}>
                  {Object.entries(EdgeStyleOptions).map(([key, val]) => {
                    return (
                      <option value={key}>
                        {val.textLocale ? chrome.i18n.getMessage(val.textLocale as string) : val.text}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div id='additional-settings'>
              <h3 className='font-bold text-lg text-gray-900 dark:text-gray-50'>
                {chrome.i18n.getMessage('popupAdditionalSettingTitle')}
              </h3>
              <div className='mt-2 space-y-2'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='noWatermark'
                      name='noWatermark'
                      type='checkbox'
                      className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                      onChange={() => setSelectedOpt((prev) => ({ ...prev, noWatermark: !selectedOpt.noWatermark }))}
                      checked={selectedOpt.noWatermark}
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='NoWatermark' className='font-medium text-gray-700 dark:text-gray-50'>
                      {chrome.i18n.getMessage('popupNoWatermarkText')}
                    </label>
                    <p className='text-gray-500 dark:text-gray-100'>
                      {chrome.i18n.getMessage('popupNoWatermarkDetail')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {isChanged && (
              <div
                id='footer-note'
                className='flex text-center text-red-600 dark:text-red-500 items-center justify-center font-bold'>
                {chrome.i18n.getMessage('popupRefreshText')}{' '}
                <div className='cursor-pointer pl-2' onClick={ReloadHandler}>
                  <svg
                    className='h-5 w-5 fill-current text-blue-900 dark:text-blue-600'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <circle cx='12' cy='12' r='12' fill='current-color' />
                    <path
                      d='M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
                      fill='white'
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className='p-3 flex flex-col space-y-3 justify-center items-center'>
            <h2 className='text-base text-center'>
              {chrome.i18n.getMessage('popupOnlyWorkingDomain') || `This extension only works on`}{' '}
              <span className='font-bold text-blue-900 dark:text-blue-500'>*.hotstar.com</span>
            </h2>

            <div
              className='bg-blue-700 dark:bg-blue-100 hover:bg-blue-200 hover:text-blue-900 dark:text-blue-900 px-3 py-2 font-bold text-white rounded-full cursor-pointer'
              onClick={() => {
                chrome.tabs.update(activeTab.id as number, { url: 'https://hotstar.com/' })
                window.close()
              }}>
              {chrome.i18n.getMessage('popupHotstarCTA') || `Go to hotstar.com`}
            </div>
          </div>
        )}
      </div>

      <div className='bg-gradient-to-r from-blue-900 to-blue-700 p-3 font-bold text-white flex justify-between'>
        <div>{chrome.i18n.getMessage('popupCreditLeft')}</div>
        <div>{chrome.i18n.getMessage('popupCreditRight')}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
