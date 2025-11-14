import './index.css';
import UsuarioController from './Controllers/UsuarioController';
import ServicoController from './Controllers/ServicoController';
import Configuracao from './Services/Configuracao';

const config = new Configuracao();
await config.darkMode();

const rotas = {
  '/servicos': ServicoController,
  '/usuarios': UsuarioController,
};
function navegarPara(rota){
  const controller = new rotas[rota]();
  //                                    2º envia a url = hash
  document.querySelector('#app').innerHTML = controller.listar();
}

window.addEventListener('hashchange', () => {
  const rota = window.location.hash.replace('#', '/');
  navegarPara(rota);
});
//1º envia a url = hash
navegarPara('/servicos');
