import './index.css';
<<<<<<< HEAD
import Rotas from './Renderer_front/Services/Rotas.js';
=======
import Rotas from './Renderer_front/Services/Rotas.js'
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
import Configuracao from './Renderer_front/Services/Configuracao.js';

const config = new Configuracao();
await config.darkMode();

const rota_mapeada = new Rotas();

async function navegarPara(rota){
<<<<<<< HEAD
                       //      /usuario_listar
=======
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
  const html = await rota_mapeada.getPage(rota);
  document.querySelector('#app').innerHTML = html;
}

window.addEventListener('hashchange', async () => {
  // chegou #usuarios
  const rota = window.location.hash.replace('#', '/');
  // se trasforma em /usuarios
  await navegarPara(rota);
});
//1º envia a url = hash
<<<<<<< HEAD
navegarPara('/usuario_menu');
=======
navegarPara('/usuario_listar');
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
