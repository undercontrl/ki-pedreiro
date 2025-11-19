import Swal from 'sweetalert2'
class MensagemDeAlerta {
    constructor() {
        this.alerta = Swal;
    }
    sucesso() {
        this.alerta.fire({
            backdrop: "#1f2631d0",
            background: "#10141b",
            color: "white",
            position: "center",
            icon: "success",
            title: "Cadastrado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });
    }
    erro(){
        this.alerta.fire({
            backdrop: "#1f2631d0",
            background: "#10141b",
            color: "white",
            position: "center",
            icon: "error",
            title: "Preencha todos os campos!",
            showConfirmButton: false,
            timer: 1500
          });
    }
}
export default MensagemDeAlerta;