import Usuarios from '../Models/Usuarios.js';
class UsuarioController{
    constructor(){
        this.usuarioModel = new Usuarios();
    }
    async listar(){
        const dados = await this.usuarioModel.listar();
        console.log('dados no controller', dados);
        return dados
<<<<<<< HEAD
=======
        // return await this.usuarioModel.listar();
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
    }
    async cadastrar(usuario){
        if(!usuario.nome || !usuario.idade){
            return false;
        }
        this.usuarioModel.adicionar(usuario);
        return true;
    }
<<<<<<< HEAD
    async atualizarUsuario(usuario){
        if(!usuario.nome || !usuario.idade){
            return false;
        }
        const usuarioExistente = await this.usuarioModel.buscarPorId(usuario.uuid);
        if(!usuarioExistente){
            return false;
        }
        const resultado = this.usuarioModel.atualizar(usuario);
        return resultado;
    }

    async buscarUsuarioPorId(id){
        if(!id){
            return false
        }
       return this.usuarioModel.buscarPorId(id)
    }

    async removerUsuario(uuid){
        const usuarioExistente = await this.usuarioModel.buscarPorId(uuid);
        if(!usuarioExistente){
            return false;
        }
        const resultado = await this.usuarioModel.remover(usuarioExistente);
        return resultado
    }

=======
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
}
export default UsuarioController;