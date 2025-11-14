import Servicos from '../Models/Servicos.js';
import ServicosView from '../Views/ServicosView.js';
class ServicoController{
    constructor(){
        this.servicoModel = new Servicos();
        this.servicosView = new ServicosView(this.servicoModel);
    }
    listar(){
        return this.servicosView.renderizar();
    }
}

export default ServicoController;