import Swal from 'sweetalert2'
class MensagemDeAlerta {
    constructor() {
        this.alerta = Swal;
    }
<<<<<<< HEAD
    sucesso(mensagem="Cadastrado com sucesso!") {
=======
    sucesso() {
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
        this.alerta.fire({
            backdrop: "#1f2631d0",
            background: "#10141b",
            color: "white",
            position: "center",
            icon: "success",
<<<<<<< HEAD
            title: mensagem,
=======
            title: "Cadastrado com sucesso!",
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
            showConfirmButton: false,
            timer: 1500
          });
    }
<<<<<<< HEAD
    erro(mensagem="Preencha todos os campos!"){
=======
    erro(){
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
        this.alerta.fire({
            backdrop: "#1f2631d0",
            background: "#10141b",
            color: "white",
            position: "center",
            icon: "error",
<<<<<<< HEAD
            title: mensagem,
=======
            title: "Preencha todos os campos!",
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
            showConfirmButton: false,
            timer: 1500
          });
    }
}
export default MensagemDeAlerta;