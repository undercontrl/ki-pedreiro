import UsuariosView from "../UsuariosView";
class UsuarioForm{
    constructor(){
        this.view = new UsuariosView();
    }
    renderizarFormulario(){
        return this.view.renderizarFormulario();
    }
}
export default UsuarioForm;