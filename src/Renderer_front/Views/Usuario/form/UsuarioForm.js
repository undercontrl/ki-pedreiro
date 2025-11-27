<<<<<<< HEAD
import UsuariosView from "../UsuariosView.js";
=======
import UsuariosView from "../UsuariosView";
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
import MensagemDeAlerta from "../../../Services/MensagemDeAlerta.js";
class UsuarioForm{
    constructor(){
        this.view = new UsuariosView();
        this.mensagem = new MensagemDeAlerta();
    }
    renderizarFormulario(){
        setTimeout(() => {
            this.adicionarEventos();
<<<<<<< HEAD
            console.log("evento criado")
        }, 0);
        return this.view.renderizarFomulario();
    }
    adicionarEventos(){
        const formulario = document.getElementById('form-usuario');
        formulario.addEventListener('submit', async (event) =>{
            event.preventDefault();
            console.log(event)
            const nome = document.getElementById('nome');
            const idade = document.getElementById('idade');
            const usuario = {
                nome: nome.value,
                idade: idade.value
            }
            const resultado = await window.api.cadastrar(usuario);
           if(resultado){
             nome.value = '';
             idade.value = '';
             this.mensagem.sucesso();
           }else{
             this.mensagem.erro();
           }
            
        })
=======
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
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
    }
}
export default UsuarioForm;