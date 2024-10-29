export class Usuario {
    #usuario;
    #contraseña;
    #cuentas;
    constructor(usuario,contraseña) {
        this.#usuario =usuario;
        this.#contraseña = contraseña;
        this.#cuentas = [];
    }

    addNewCuenta(cuenta){
        this.#cuentas.push(cuenta);
    }

    get  usuario(){
        return this.#usuario;
    }

    get contraseña(){
        return this.#contraseña;
    }

    get  cuentas(){
        return this.#cuentas;
    }

    set usuario(nuevoUsuario){
        this.#usuario = nuevoUsuario;
    }

    set contraseña(nuevaContraseña){
        this.#contraseña = nuevaContraseña;
    }

}