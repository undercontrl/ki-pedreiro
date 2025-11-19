import UsuariosView from "../UsuariosView";
import MensagemDeAlerta from "../../../Services/MensagemDeAlerta.js";
class UsuarioForm{
    constructor(){
        this.view = new UsuariosView();
        this.mensagem = new MensagemDeAlerta();
    }
    renderizarFormulario(){
        setTimeout(() => {
            this.adicionarEventos();
            console.log('Eventos adicionados ao formulário de usuário.');
        }, 0);
        return this.view.renderizarFormulario();
    }
    adicionarEventos(){
        const formulario = document.getElementById('form-usuario');
        formulario.addEventListener('submit', async (event) => {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const idade = parseInt(document.getElementById('idade').value, 10);
            const usuario = { nome: nome, idade: idade };
            const resultado = await window.api.cadastrar(usuario);
            console.log('Resultado do cadastro:', resultado);
            if(resultado){
                formulario.reset();
                this.mensagem.sucesso();
            }else{
                this.mensagem.erro();
            }
        });
    }
}
export default UsuarioForm;