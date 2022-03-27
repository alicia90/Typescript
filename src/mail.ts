import { enumTipoMail } from "./enums";

export class Mail {
  private tipo: enumTipoMail;
  private direccion: string;

  constructor(_tipo: enumTipoMail, _direcccion: string) {
    this.tipo = _tipo;
    this.direccion = _direcccion;
  }

  set setTipo(a: enumTipoMail) {
    this.tipo = a;
  }
  set setDireccion(b: string) {
    this.direccion = b;
  }
  get getTipo() {
    return this.tipo;
  }
  get getDireccion() {
    return this.direccion;
  }

  public mostrarMail(iterator: number): string {
    return (
      "El mail " +
      iterator +
      " es: " +
      this.getDireccion +
      " de tipo " +
      this.getTipo.toString()
    );
  }
}
