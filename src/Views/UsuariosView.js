class UsuariosView{
    constructor(Usuarios){
        this.usuarios = Usuarios;
    }
    renderizar(){
<<<<<<< HEAD
       const Usuarios = this.usuarios.listar();
       let container = '<div class="container">';
       Usuarios.forEach(usuario => {
           container += `<div> ${usuario.nome} - ${usuario.idade} </div><br/>`
       });
=======
        const Usuarios = this.usuarios.listar();
        let container ='<div class="container">';
        Usuarios.forEach(usuario => {
            container += `<div> ${usuario.nome} - ${usuario.idade} </div><br/>`
        });
>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969
        container += '</div>';
        return container;
    }
}
export default UsuariosView;