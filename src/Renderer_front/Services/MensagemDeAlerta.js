import Swal from 'sweetalert2'
class MensagemDeAlerta {
    constructor() {
        this.alerta = Swal;
    }
    sucesso(mensagem="Cadastrado com sucesso!") {
        this.alerta.fire({
            backdrop: "#1f2631d0",
            background: "#10141b",
            color: "white",
            position: "center",
            icon: "success",
            title: mensagem,
            showConfirmButton: false,
            timer: 1500
          });
    }
    erro(mensagem="Preencha todos os campos!"){
        this.alerta.fire({
            backdrop: "#1f2631d0",
            background: "#10141b",
            color: "white",
            position: "center",
            icon: "error",
            title: mensagem,
            showConfirmButton: false,
            timer: 1500
          });
    }
}
export default MensagemDeAlerta;