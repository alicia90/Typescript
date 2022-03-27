"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(_calle, _numero, _piso, _letra, _codigoPostal, _poblacion, _provincia) {
        this.calle = _calle;
        this.numero = _numero;
        this.piso = _piso;
        this.letra = _letra;
        this.codigoPostal = _codigoPostal;
        this.poblacion = _poblacion;
        this.provincia = _provincia;
    }
    get getCalle() {
        return this.calle;
    }
    set setCalle(v) {
        this.calle = v;
    }
    get getNumero() {
        return this.numero;
    }
    set setNumero(v) {
        this.numero = v;
    }
    get getPiso() {
        return this.piso;
    }
    set setPiso(v) {
        this.piso = v;
    }
    get getLetra() {
        return this.letra;
    }
    set setLetra(v) {
        this.letra = v;
    }
    get getCodigoPostal() {
        return this.codigoPostal;
    }
    set setCodigoPostal(v) {
        this.codigoPostal = v;
    }
    get getPoblacion() {
        return this.poblacion;
    }
    set setPoblacion(v) {
        this.poblacion = v;
    }
    get getProvincia() {
        return this.provincia;
    }
    set setProvincia(v) {
        this.provincia = v;
    }
    mostrarDireccion() {
        console.log("Calle: " +
            this.calle +
            " Nº: " +
            this.numero +
            " , piso: " +
            this.piso +
            ", letra: " +
            this.letra +
            ", codigo postal: " +
            this.codigoPostal +
            ", población: " +
            this.poblacion +
            ", provincia: " +
            this.provincia);
    }
}
exports.Direccion = Direccion;
//# sourceMappingURL=direccion.js.map