import './index.css';
<<<<<<< HEAD
import UsuarioController from './Controllers/UsuarioController';
import ServicoController from './Controllers/ServicoController';
import Configuracao from './Services/Configuracao';

const config = new Configuracao();
await config.darkMode();
=======
import UsuarioController from './Controllers/UsuarioController.js'
import ServicoController from './Controllers/ServicoController.js'
import Configuracao from './Services/Configuracao.js';

const config = new Configuracao();
await config.modoEscuro();
>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969

const rotas = {
  '/servicos': ServicoController,
  '/usuarios': UsuarioController,
};
function navegarPara(rota){
<<<<<<< HEAD
  const controller = new rotas[rota]();
  //                                    2º envia a url = hash
=======
                            //usuarios
  const controller = new rotas[rota]();
                  // new UsuarioController()
  //                 2º envia a url = hash
>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969
  document.querySelector('#app').innerHTML = controller.listar();
}

window.addEventListener('hashchange', () => {
  // chegou #usuarios
  const rota = window.location.hash.replace('#', '/');
  // se trasforma em /usuarios
  navegarPara(rota);
});
//1º envia a url = hash
navegarPara('/servicos');
