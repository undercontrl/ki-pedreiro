<<<<<<< HEAD
class Configuracao {
  constructor() {
    this.verificarConexao();
  }
   async modoEscuro(){
            document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
            const isDarkMode = await window.darkMode.toggle()
            document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
        })
      }
    verificarConexao(){
      const updateOnlineStatus = () => {
        document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
      }
      window.addEventListener('online', updateOnlineStatus)
      window.addEventListener('offline', updateOnlineStatus)
    }
  }

=======
class Configuracao{
    constructor(){
        this.verificarConexao();
    }
    async darkMode(){
        document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
            const isDarkMode = await window.darkMode.toggle()
            document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
          })
    }
    verificarConexao(){
        const updateOnlineStatus = () => {
            document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
          }
          window.addEventListener('online', updateOnlineStatus)
          window.addEventListener('offline', updateOnlineStatus)
    }
}
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
export default Configuracao;