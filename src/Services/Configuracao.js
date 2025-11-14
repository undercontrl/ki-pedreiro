<<<<<<< HEAD
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
=======
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

>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969
export default Configuracao;