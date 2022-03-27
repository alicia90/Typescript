import { enumTipoTelefono } from "./enums";

export class Telefono {
  private tipo: enumTipoTelefono;
  public get getTipo(): enumTipoTelefono {
    return this.tipo;
  }
  public set setTipo(v: enumTipoTelefono) {
    this.tipo = v;
  }

  private numero: string;
  public get getNumero(): string {
    return this.numero;
  }
  public set setNumero(v: string) {
    this.numero = v;
  }

  constructor(_tipo: enumTipoTelefono, _numero: string) {
    this.tipo = _tipo;
    this.numero = _numero;
  }

  public mostrarTelefono(): string {
    return "El telefono de tipo " + this.tipo + " es: " + this.numero;
  }
}
