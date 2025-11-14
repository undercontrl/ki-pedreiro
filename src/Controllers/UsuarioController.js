import Usuarios from '../Models/Usuarios.js';
<<<<<<< HEAD
import UsuariosView from '../Views/UsuariosView';
=======
import UsuariosView from '../Views/UsuariosView.js';
>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969
class UsuarioController{
    constructor(){
        this.usuarioModel = new Usuarios();
        this.usuariosView = new UsuariosView(this.usuarioModel);
    }
    listar(){
        return this.usuariosView.renderizar();
    }
<<<<<<< HEAD
}

=======

}
>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969
export default UsuarioController;