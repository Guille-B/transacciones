export class Persona {
    #nombre;
    #apellido;
    #DNI;
    #fecha_nac;
    
    constructor(nombre,apellido,DNI,fecha_nac) {
        this.nombre = nombre;
        this.#apellido = apellido;
        this.#DNI = DNI;
        this.#fecha_nac = fecha_nac;
    }

    get nombre(){
        return this.#nombre;
    }

    get apellido(){
        return this.#apellido;
    }

    get DNI (){
        return this.#DNI;
    }

    get fecha_nac (){
        return this.#fecha_nac;
    }



    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    set apellido(nuevoApellido){
        this.#apellido = nuevoApellido;
    }

    set  DNI(nuevoDNI){
        this.#DNI = nuevoDNI;
    }

    set  fecha_nac(nuevaFecha){
        this.#fecha_nac = nuevaFecha;
    }

    

}