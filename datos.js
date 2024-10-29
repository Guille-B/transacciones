import { Cuentas } from "./cuenta.js";
import { Persona } from "./persona.js";
import { Usuario } from "./usuario.js";



export const personas = [ 
    
    new Persona ("augusto","rigoberto","28872110","04/02/1989"),
    new Persona ("juan","perez","28872111","12/07/1990"),
    new Persona ("maria","lopez","28872112","03/04/1999"),
    new Persona ("juan","lopez","28872113","03/01/1985"),
    

]

export const datos = {
    
    cuentas:[
        new Cuentas(150000) ,
        new Cuentas(200000),
        new Cuentas(150000),
        new Cuentas(300000),
        new Cuentas(150000),
    ],
    usuarios:[
        new Usuario("augusto1","12345"),
        new Usuario("juanjuan","123"),
        new Usuario("marlopez89","1234"),
        new Usuario("juanlo")
    ]

};

datos.cuentas[0].addNewPersona(personas[0])
datos.cuentas[1].addNewPersona(personas[1])
datos.cuentas[2].addNewPersona(personas[2])
datos.cuentas[3].addNewPersona(personas[3])

datos.usuarios[0].addNewCuenta(datos.cuentas[0]);
datos.usuarios[1].addNewCuenta(datos.cuentas[1]);
datos.usuarios[1].addNewCuenta(datos.cuentas[2]);
datos.usuarios[2].addNewCuenta(datos.cuentas[3]);
datos.usuarios[2].addNewCuenta(datos.cuentas[4]);
datos.usuarios[0].addNewCuenta(datos.cuentas[5]);






