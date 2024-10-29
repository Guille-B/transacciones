import { datos } from "./datos.js";

const username = localStorage.getItem("username")

const usuario = datos.usuarios.find ((usuario)=>usuario.usuario === username);
console.log(usuario)
usuario.cuentas.forEach(cuenta  => console.log(cuenta))

const btnCerrarSesion = document.getElementById("cerrarSesion");
btnCerrarSesion.addEventListener("click",cerrarSesion);

const btnMostrarTransaccion = document.getElementById("transaccion");
btnMostrarTransaccion.addEventListener("click",MostrarCuenta);

const btnTransaccion = document.getElementById("transferencia");
btnTransaccion.addEventListener("click",transferencia);





function MostrarCuenta() {
    document.querySelector(".transaccionContainer").classList.remove("oculto");
    if (usuario.cuentas.length != 0) {
        const selectO = document.getElementById("cuentasO_Select");
        const selectD = document.getElementById("cuentasD_Select");
        
        selectO.innerHTML = '<option disabled value="">Seleccionar Cuenta</option>';
        selectD.innerHTML = '<option disabled value="">Seleccionar Cuenta</option>';

        usuario.cuentas.forEach(cuenta => {
            const opcionO = document.createElement("option");
            opcionO.value = cuenta.numCuenta;
            opcionO.text = `Monto: ${cuenta.monto} ID cuenta ${cuenta.numCuenta}`;
            selectO.appendChild(opcionO);

            const opcionD = document.createElement("option");
            opcionD.value = cuenta.numCuenta;
            opcionD.text = `Monto: ${cuenta.monto} ID cuenta ${cuenta.numCuenta}`;
            selectD.appendChild(opcionD);
        });
    } else {
        alert("Este usuario no tiene cuenta en este banco");
    }
}






function transferencia() {
    const cuentaSelecO = parseInt(document.getElementById("cuentasO_Select").value);
    const cuentaSelectD = parseInt(document.getElementById("cuentasD_Select").value);
    console.log(cuentaSelecO)
    console.log(cuentaSelectD)
    if (cuentaSelecO === cuentaSelectD) {
        alert("no se puede transferir a la misma cuenta");

    } else {
        const monto = parseInt(document.getElementById("monto").value);
        const cuentaO = usuario.cuentas.find(cuenta => cuenta.numCuenta === cuentaSelecO);
        const cuentaD = usuario.cuentas.find(cuenta => cuenta.numCuenta === cuentaSelectD);
        console.log(usuario.cuentas)
        if(!cuentaO || !cuentaD){
            alert("cuenta no encontrada");
        }else
        {   if (cuentaO.monto<monto) {
                alert("no tienes suficiente dinero");
        }else{
            if (monto>0) {
                cuentaO.monto -= monto;
                cuentaD.monto += monto;
                alert(`Transferencia exitosa: ${monto} transferido de cuenta ${cuentaO} a cuenta ${cuentaD}.`);
                console.log(`Nuevo saldo cuenta de origen: ${cuentaO.monto}`);
                console.log(`Nuevo saldo cuenta de destino: ${cuentaD.monto}`);
                MostrarCuenta();
                document.getElementById("monto").value = "";
            }else{
                alert("no se puede  transferir un monto vacio");

            }
            
        }
    }
    
}}




function cerrarSesion(){
    localStorage.removeItem("username");
    window.location.href = "./index.html";
  }