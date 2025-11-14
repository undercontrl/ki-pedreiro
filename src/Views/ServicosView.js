class ServicosView{
    constructor(servicos){
        this.servicos = servicos;
    }
    renderizar(){
<<<<<<< HEAD
        const Servicos = this.servicos.listar();
        let container = '<div class="container">';
        Servicos.forEach(servico => {
            container += `<div> ${servico.nome} - ${servico.preço} </div><br/>`
        });
=======
        const servicos = this.servicos.listar();
        let container ='<div class="container">';
        servicos.forEach(servico => {
            container += `<div> ${servico.nome} - ${servico.preço} </div><br/>`
        });
        container += '</div>';
>>>>>>> 9782066e4fdb4131ffd81ea12ac400eb01289969
        return container;
    }
}
export default ServicosView;