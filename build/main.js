"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
const enums_1 = require("./enums");
console.log("--------------- INICIO de la aplicación. ---------------");
/* ------------------------- PERSONA 1 ------------------------- */
let direccion1_persona1 = new direccion_1.Direccion("C/Perez Ayala", 51, 3, "No Aplica", 28034, "Madrid", "Madrid");
let direcciones = [direccion1_persona1];
let mail1_persono1 = new mail_1.Mail(enums_1.enumTipoMail.personal, "aliciasy90@gmail.com");
let mails = [mail1_persono1];
let telefono1_persona1 = new telefono_1.Telefono(enums_1.enumTipoTelefono.movil, "656565656");
let telefonos = [telefono1_persona1];
var persona1 = new persona_1.Persona("Alicia", "Sánchez", 32, "71888798Q", new Date("1990-08-14"), enums_1.enumColorFavorito.verde, enums_1.enumSexo.mujer, direcciones, mails, telefonos, "Esto es una nota larga.");
/* ------------------------- PERSONA 2 ------------------------- */
let direccion1_persona2 = new direccion_1.Direccion("C/Paco Perez", 24, "primero", "C", 28810, "Madrid", "Madrid");
let direcciones2 = [direccion1_persona2];
let mail1_persono2 = new mail_1.Mail(enums_1.enumTipoMail.personal, "emailpersonal@gmail.com");
let mail2_persona2 = new mail_1.Mail(enums_1.enumTipoMail.empresa, "emailempresa@empresa.es");
let mails2 = [mail1_persono2, mail2_persona2];
let telefono1_persona2 = new telefono_1.Telefono(enums_1.enumTipoTelefono.movil, "666666666");
let telefonos2 = [telefono1_persona2];
var persona2 = new persona_1.Persona("Pepito", "Grillo", 24, "08485696Y", new Date("1998-12-12"), enums_1.enumColorFavorito.azul, enums_1.enumSexo.hombre, direcciones2, mails2, telefonos2, "Lorem ipsum");
var personas = [persona1, persona2];
/* ------------------------- PERSONA 3 ------------------------- */
let direccion1_persona3 = new direccion_1.Direccion("C/Elvira", 3, "2", "A", 45678, "Granada", "Granada");
let direcciones3 = [direccion1_persona2];
let mail1_persona3 = new mail_1.Mail(enums_1.enumTipoMail.empresa, "emailempresa@empresa.es");
let mails3 = [mail1_persona3];
let telefono1_persona3 = new telefono_1.Telefono(enums_1.enumTipoTelefono.movil, "633333333");
let telefono2_persona3 = new telefono_1.Telefono(enums_1.enumTipoTelefono.fijo, "999999999");
let telefono3_persona3 = new telefono_1.Telefono(enums_1.enumTipoTelefono.empresa, "696969696");
let telefonos3 = [telefono1_persona3];
var persona3 = new persona_1.Persona("Paco", "Perez", 50, "09080467T", new Date("1972-10-01"), enums_1.enumColorFavorito.morado, enums_1.enumSexo.neutro, direcciones3, mails3, telefonos3, "Una nota muy extensa");
var personas = [persona1, persona2, persona3];
let iterator = 1;
for (let persona of personas) {
    console.log("--------------- DATOS DE LA PERSONA " + iterator + " ---------------");
    persona.mostrarDatos();
    iterator++;
    console.log("");
}
console.log("");
console.log(" --------------- ACTUALIZANDO DATOS --------------- ");
console.log("");
let personaModificar = personas.find((x) => x.getDni == "08485696Y");
if (personaModificar != undefined) {
    let nuevaDireccion = new direccion_1.Direccion("C/Buganvilla", 51, "No Aplica", "No Aplica", 28810, "Villalbilla", "Madrid");
    let nuevasDirecciones = [nuevaDireccion];
    personaModificar.setDirecciones = nuevasDirecciones;
    let telefono1_personaModificada = new telefono_1.Telefono(enums_1.enumTipoTelefono.fijo, "918568456");
    personaModificar.getTelefonos.push(telefono1_personaModificada);
    let emailModificar = personaModificar.getMails.find((x) => x.getTipo == enums_1.enumTipoMail.empresa);
    if (emailModificar != undefined) {
        const index = personaModificar.getMails.indexOf(emailModificar);
        personaModificar.getMails[index].setDireccion = "emailmodificado@gmail.com";
    }
    console.log("--------------- DATOS DE LA PERSONA MODIFICADA --------------- ");
    personaModificar.mostrarDatos();
}
else {
    console.log("No se ha encontrado esa persona.");
}
console.log("--------------- FIN de la aplicación. ---------------");
//# sourceMappingURL=main.js.map