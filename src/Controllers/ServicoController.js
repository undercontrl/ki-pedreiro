import Servicos from '../Models/Servicos.js';
import ServicosView from '../Views/ServicosView.js';
class ServicoController{
    constructor(){
<<<<<<< HEAD
        this.servicoModel = new Servicos();
        this.servicosView = new ServicosView(this.servicoModel);
    }
    listar(){
        return this.servicosView.renderizar();
    }
}

=======
        this.ServicoModel = new Servicos();
        this.ServicosView = new ServicosView(this.ServicoModel);
    }
    listar(){
        return this.ServicosView.renderizar();
    }

}
>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969
export default ServicoController;