import fs from 'fs-extra'
import type { Manifest } from 'webextension-polyfill'
import type PkgType from '../package.json'
import { r } from '../scripts/utils'

export async function getManifest() {
  const pkg = (await fs.readJSON(r('package.json'))) as typeof PkgType

  const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 3,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
    default_locale: 'en',
    action: {
      default_title: 'Enhance your Hotstar',
      default_popup: './dist/popup/index.html',
      default_icon: {
        16: './assets/icons/default/d_action_icon_16.png',
        32: './assets/icons/default/d_action_icon_32.png',
        48: './assets/icons/default/d_action_icon_48.png',
      },
    },
    // options_ui: {
    //   page: './dist/options/index.html',
    //   open_in_tab: true,
    //   chrome_style: false,
    // },
    // background: {
    //   page: './dist/background/index.html',
    //   persistent: false,
    // },
    background: {
      service_worker: './dist/serviceWorker/index.global.js',
    },
    icons: {
      32: './assets/icon-32.png',
      48: './assets/icon-48.png',
      64: './assets/icon-64.png',
      128: './assets/icon-128.png',
      256: './assets/icon-256.png',
    },
    author: 'Supakarn Laorattanakul',
    permissions: ['storage', 'activeTab'],
    content_scripts: [
      {
        matches: ['https://*.hotstar.com/*', 'https://hotstar.com/*'],
        js: ['./dist/contentScripts/index.global.js'],
      },
    ],
  }

  return manifest
}
