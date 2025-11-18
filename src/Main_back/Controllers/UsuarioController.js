import Usuarios from '../Models/Usuarios.js';
class UsuarioController{
    constructor(){
        this.usuarioModel = new Usuarios();
    }
    async listar(){
        const dados = await window.usuarioModel.listar();
        console.log('dados no controller', dados);
        return dados
        // return await this.usuarioModel.listar();
    }
    async cadastrar(usuario){
        this.usuarioModel.adicionar(usuario);
        return true;
    }
}
export default UsuarioController;