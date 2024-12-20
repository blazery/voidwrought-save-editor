import { createApp } from 'vue'
import App from './App.vue'

import './style.css'
import { IpcRenderer } from 'electron';

// fixes issues of window.ipcRenderer not being available
declare global {
  interface Window {
    ipcRenderer: IpcRenderer;
  }
}

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
