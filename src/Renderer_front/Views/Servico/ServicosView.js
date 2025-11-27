class ServicosView{
    constructor(servicos){
        this.servicos = servicos;
    }
    renderizar(){
        const Servicos = this.servicos.listar();
        let container = '<div class="container">';
        Servicos.forEach(servico => {
            container += `<div> ${servico.nome} - ${servico.preço} </div><br/>`
        });
        return container;
    }
}
export default ServicosView;