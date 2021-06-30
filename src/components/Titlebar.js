import React from 'react'
import {appWindow} from '@tauri-apps/api/window'
import './titlebar.css'

const Titlebar = () => {
    return (
<div data-tauri-drag-region class="titlebar">
  <div class="titlebar-button" id="titlebar-minimize" onClick={() => appWindow.minimize()}>
    <img
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
    />
  </div>
  <div class="titlebar-button" id="titlebar-maximize" onClick={() => appWindow.maximize()}>
    <img
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
    />
  </div>
  <div class="titlebar-button" id="titlebar-close" onClick={() => appWindow.close()}>
    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
  </div>
</div>
    )
}

export default Titlebar
