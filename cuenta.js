export class Cuentas {
    #personas;
    #monto;
    #numCuenta;
    static #instance = 0
    constructor(monto) {
        this.#personas = [];
        this.#monto = monto;
        this.#numCuenta = ++Cuentas.#instance;
    }

    addNewPersona(persona){
        this.#personas.push(persona)
       
    }


    get monto(){
        return this.#monto
    }
    get  personas(){
        return this.#personas
    }
    get numCuenta(){
        return this.#numCuenta
    }

    set monto(nuevoMonto) {
        if (typeof nuevoMonto === 'number' && nuevoMonto >= 0) {
            this.#monto = nuevoMonto; 
        } else {
            console.error("El nuevo monto debe ser un número positivo.");
        }
    }

    
   
}