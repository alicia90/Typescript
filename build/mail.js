"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(_tipo, _direcccion) {
        this.tipo = _tipo;
        this.direccion = _direcccion;
    }
    set setTipo(a) {
        this.tipo = a;
    }
    set setDireccion(b) {
        this.direccion = b;
    }
    get getTipo() {
        return this.tipo;
    }
    get getDireccion() {
        return this.direccion;
    }
    mostrarMail(iterator) {
        return ("El mail " +
            iterator +
            " es: " +
            this.getDireccion +
            " de tipo " +
            this.getTipo.toString());
    }
}
exports.Mail = Mail;
//# sourceMappingURL=mail.js.map