import Usuarios from '../Models/Usuarios.js';
import UsuariosView from '../Views/UsuariosView';
class UsuarioController{
    constructor(){
        this.usuarioModel = new Usuarios();
        this.usuariosView = new UsuariosView(this.usuarioModel);
    }
    listar(){
        return this.usuariosView.renderizar();
    }
}

export default UsuarioController;