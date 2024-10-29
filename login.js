import { datos } from "./datos.js";


document.getElementById("inicio").addEventListener("click", (e)=>{
    e.preventDefault();
    const username = document.getElementById("usuario");
    const password = document.getElementById("contraseña");
    
const usuarioEncontrado = datos.usuarios.find(
    usuario => usuario.usuario === username.value && usuario.contraseña === password.value
);

if (usuarioEncontrado) {
    alert(username.value + " Iniciaste Sesión");
    localStorage.setItem("username", usuarioEncontrado.usuario);
    localStorage.setItem("contra", usuarioEncontrado.contraseña);
    window.location.href = "./transacciones.html";
} else {
    alert("Usuario y/o contraseña incorrectos");
    username.value = "";
    password.value = "";
}
})
