"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(_tipo, _numero) {
        this.tipo = _tipo;
        this.numero = _numero;
    }
    get getTipo() {
        return this.tipo;
    }
    set setTipo(v) {
        this.tipo = v;
    }
    get getNumero() {
        return this.numero;
    }
    set setNumero(v) {
        this.numero = v;
    }
    mostrarTelefono() {
        return "El telefono de tipo " + this.tipo + " es: " + this.numero;
    }
}
exports.Telefono = Telefono;
//# sourceMappingURL=telefono.js.map