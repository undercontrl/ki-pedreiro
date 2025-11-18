import './index.css';
import Rotas from './Renderer_front/Services/Rotas.js'
import Configuracao from './Renderer_front/Services/Configuracao.js';

const config = new Configuracao();
await config.darkMode();

const rota_mapeada = new Rotas();

async function navegarPara(rota){
  const html = await rota_mapeada.getPage(rota);
  document.querySelector('#app').innerHTML = html;
}

window.addEventListener('hashchange', () => {
  // chegou #usuarios
  const rota = window.location.hash.replace('#', '/');
  // se trasforma em /usuarios
  navegarPara(rota);
});
//1º envia a url = hash
navegarPara('/usuario_listar');
