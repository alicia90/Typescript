import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";
import {
  enumColorFavorito,
  enumSexo,
  enumTipoMail,
  enumTipoTelefono,
} from "./enums";

console.log("--------------- INICIO de la aplicación. ---------------");

/* ------------------------- PERSONA 1 ------------------------- */

let direccion1_persona1 = new Direccion(
  "C/Perez Ayala",
  51,
  3,
  "No Aplica",
  28034,
  "Madrid",
  "Madrid"
);

let direcciones: Array<Direccion> = [direccion1_persona1];

let mail1_persono1 = new Mail(enumTipoMail.personal, "aliciasy90@gmail.com");
let mails: Array<Mail> = [mail1_persono1];

let telefono1_persona1 = new Telefono(enumTipoTelefono.movil, "656565656");
let telefonos: Array<Telefono> = [telefono1_persona1];

var persona1 = new Persona(
  "Alicia",
  "Sánchez",
  32,
  "71888798Q",
  new Date("1990-08-14"),
  enumColorFavorito.verde,
  enumSexo.mujer,
  direcciones,
  mails,
  telefonos,
  "Esto es una nota larga."
);

/* ------------------------- PERSONA 2 ------------------------- */

let direccion1_persona2 = new Direccion(
  "C/Paco Perez",
  24,
  "primero",
  "C",
  28810,
  "Madrid",
  "Madrid"
);

let direcciones2: Array<Direccion> = [direccion1_persona2];

let mail1_persono2 = new Mail(enumTipoMail.personal, "emailpersonal@gmail.com");
let mail2_persona2 = new Mail(enumTipoMail.empresa, "emailempresa@empresa.es");
let mails2: Array<Mail> = [mail1_persono2, mail2_persona2];

let telefono1_persona2 = new Telefono(enumTipoTelefono.movil, "666666666");
let telefonos2: Array<Telefono> = [telefono1_persona2];

var persona2 = new Persona(
  "Pepito",
  "Grillo",
  24,
  "08485696Y",
  new Date("1998-12-12"),
  enumColorFavorito.azul,
  enumSexo.hombre,
  direcciones2,
  mails2,
  telefonos2,
  "Lorem ipsum"
);

var personas: Array<Persona> = [persona1, persona2];

/* ------------------------- PERSONA 3 ------------------------- */

let direccion1_persona3 = new Direccion(
  "C/Elvira",
  3,
  "2",
  "A",
  45678,
  "Granada",
  "Granada"
);

let direcciones3: Array<Direccion> = [direccion1_persona2];

let mail1_persona3 = new Mail(enumTipoMail.empresa, "emailempresa@empresa.es");
let mails3: Array<Mail> = [mail1_persona3];

let telefono1_persona3 = new Telefono(enumTipoTelefono.movil, "633333333");
let telefono2_persona3 = new Telefono(enumTipoTelefono.fijo, "999999999");
let telefono3_persona3 = new Telefono(enumTipoTelefono.empresa, "696969696");
let telefonos3: Array<Telefono> = [telefono1_persona3];

var persona3 = new Persona(
  "Paco",
  "Perez",
  50,
  "09080467T",
  new Date("1972-10-01"),
  enumColorFavorito.morado,
  enumSexo.neutro,
  direcciones3,
  mails3,
  telefonos3,
  "Una nota muy extensa"
);

var personas: Array<Persona> = [persona1, persona2, persona3];

let iterator: number = 1;
for (let persona of personas) {
  console.log(
    "--------------- DATOS DE LA PERSONA " + iterator + " ---------------"
  );
  persona.mostrarDatos();
  iterator++;
  console.log("");
}

console.log("");
console.log(" --------------- ACTUALIZANDO DATOS --------------- ");
console.log("");

let personaModificar = personas.find((x) => x.getDni == "08485696Y");
if (personaModificar != undefined) {
  let nuevaDireccion = new Direccion(
    "C/Buganvilla",
    51,
    "No Aplica",
    "No Aplica",
    28810,
    "Villalbilla",
    "Madrid"
  );

  let nuevasDirecciones: Array<Direccion> = [nuevaDireccion];

  personaModificar.setDirecciones = nuevasDirecciones;
  let telefono1_personaModificada = new Telefono(
    enumTipoTelefono.fijo,
    "918568456"
  );
  personaModificar.getTelefonos.push(telefono1_personaModificada);

  let emailModificar = personaModificar.getMails.find(
    (x) => x.getTipo == enumTipoMail.empresa
  );
  if (emailModificar != undefined) {
    const index: number = personaModificar.getMails.indexOf(emailModificar);
    personaModificar.getMails[index].setDireccion = "emailmodificado@gmail.com";
  }

  console.log(
    "--------------- DATOS DE LA PERSONA MODIFICADA --------------- "
  );
  personaModificar.mostrarDatos();
} else {
  console.log("No se ha encontrado esa persona.");
}

console.log("--------------- FIN de la aplicación. ---------------");
