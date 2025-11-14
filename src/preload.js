<<<<<<< HEAD
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron/renderer'

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle')
})
=======
import { contextBridge, ipcRenderer } from 'electron/renderer';

contextBridge.exposeInMainWorld(
    //chave      objeto como valor
    // window.darkMode.toggle()
    'darkMode', {
        toggle: () => ipcRenderer.invoke('dark-mode:toggle')
    }
)
>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969
