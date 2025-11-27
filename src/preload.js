// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron/renderer'

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle')
  }
)

contextBridge.exposeInMainWorld(
<<<<<<< HEAD
    'darkMode', {
        toggle: () => ipcRenderer.invoke('dark-mode:toggle')
    }
)

contextBridge.exposeInMainWorld(
    // window.api.listar()
    'api',{
        listar: () => ipcRenderer.invoke('usuarios:listar'),
        cadastrar: (usuario) => ipcRenderer.invoke('usuarios:cadastrar', usuario),
        buscarporid: (uuid) => ipcRenderer.invoke("usuarios:buscarPorId", uuid),
        editarUsuario: (usuario) => ipcRenderer.invoke("usuarios:editar", usuario),
        removerUsuario: (uuid) => ipcRenderer.invoke("usuarios:removerUsuario", uuid)
    }
)
=======
  'api',{
    listar:() => ipcRenderer.invoke("usuarios:listar"),
    cadastrar:(usuario) => ipcRenderer.invoke("usuarios:cadastrar", usuario)
  }

)
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
