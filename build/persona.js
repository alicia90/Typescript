"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(_nombre, _apellidos, _edad, _dni, _cumpleanios, _colorFavorito, _sexo, _direccions, _mails, _telefonos, _notas) {
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.edad = _edad;
        this.dni = _dni;
        this.cumpleanios = _cumpleanios;
        this.colorFavorito = _colorFavorito;
        this.sexo = _sexo;
        this.direcciones = _direccions;
        this.mails = _mails;
        this.telefonos = _telefonos;
        this.notas = _notas;
    }
    set setNombre(a) {
        this.nombre = a;
    }
    set setAellidos(b) {
        this.apellidos = b;
    }
    set setEdad(c) {
        this.edad = c;
    }
    set setDni(d) {
        this.dni = d;
    }
    set setCumpleanios(e) {
        this.cumpleanios = e;
    }
    set setColorFavorito(f) {
        this.colorFavorito = f;
    }
    set setSexo(g) {
        this.sexo = g;
    }
    set setDirecciones(h) {
        this.direcciones = h;
    }
    set setMails(i) {
        this.mails = i;
    }
    set setTelefonos(j) {
        this.telefonos = j;
    }
    set setNotas(k) {
        this.notas = k;
    }
    get getNombre() {
        return this.nombre;
    }
    get getApellidos() {
        return this.apellidos;
    }
    get getEdad() {
        return this.edad;
    }
    get getDni() {
        return this.dni;
    }
    get getCumpleanios() {
        let day = this.cumpleanios.getDate();
        let month = this.cumpleanios.getMonth() + 1;
        let year = this.cumpleanios.getFullYear();
        if (month < 10)
            return day + "/" + "0" + month + "/" + year;
        else
            return day + "/" + month + "/" + year;
    }
    get getColorFavorito() {
        return this.colorFavorito;
    }
    get getSexo() {
        return this.sexo;
    }
    get getDirecciones() {
        return this.direcciones;
    }
    get getMails() {
        return this.mails;
    }
    get getTelefonos() {
        return this.telefonos;
    }
    get getNotas() {
        return this.notas;
    }
    mostrarDatos() {
        console.log("Nombre: " + this.getNombre);
        console.log("Apellidos: " + this.getApellidos);
        console.log("Edad: " + this.getEdad);
        console.log("DNI: " + this.getDni);
        console.log("Su cumpleanios es: " + this.getCumpleanios);
        console.log("Su color favorito es: " + this.colorFavorito);
        this.mostrarDirecciones();
        this.mostrarMails();
        this.mostrarTelefonos();
        console.log("Notas: ");
        console.log(this.getNotas);
    }
    getNombreCompleto() {
        return this.nombre + " " + this.apellidos;
    }
    mostrarDirecciones() {
        console.log("Las direcciones de la persona " + this.getNombreCompleto() + " son: ");
        let iterator = 1;
        for (let direccion of this.direcciones) {
            console.log("La direccion " + iterator + " es: ");
            direccion.mostrarDireccion();
            iterator++;
        }
        console.log("Esta persona no tiene más direcciones.");
    }
    mostrarMails() {
        console.log("Los mails de la persona " + this.getNombreCompleto() + " son: ");
        let iterator2 = 1;
        for (let mail of this.getMails) {
            console.log(mail.mostrarMail(iterator2));
            iterator2++;
        }
    }
    mostrarTelefonos() {
        console.log("Los telefonos de la persona " + this.getNombreCompleto() + " son: ");
        for (let telefono of this.getTelefonos) {
            console.log(telefono.mostrarTelefono());
        }
    }
}
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map