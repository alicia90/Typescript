import { Direccion } from "./direccion";
import { enumColorFavorito, enumSexo } from "./enums";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number | string;
  private dni: string;
  private cumpleanios: Date;
  private colorFavorito: enumColorFavorito;
  private sexo: enumSexo;
  private direcciones: Array<Direccion>;
  private mails: Array<Mail>;
  private telefonos: Array<Telefono>;
  private notas: string;

  constructor(
    _nombre: string,
    _apellidos: string,
    _edad: number | string,
    _dni: string,
    _cumpleanios: Date,
    _colorFavorito: enumColorFavorito,
    _sexo: enumSexo,
    _direccions: Array<Direccion>,
    _mails: Array<Mail>,
    _telefonos: Array<Telefono>,
    _notas: string
  ) {
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
  set setNombre(a: string) {
    this.nombre = a;
  }
  set setAellidos(b: string) {
    this.apellidos = b;
  }
  set setEdad(c: number | string) {
    this.edad = c;
  }
  set setDni(d: string) {
    this.dni = d;
  }
  set setCumpleanios(e: Date) {
    this.cumpleanios = e;
  }
  set setColorFavorito(f: enumColorFavorito) {
    this.colorFavorito = f;
  }
  set setSexo(g: enumSexo) {
    this.sexo = g;
  }
  set setDirecciones(h: Array<Direccion>) {
    this.direcciones = h;
  }
  set setMails(i: Array<Mail>) {
    this.mails = i;
  }
  set setTelefonos(j: Array<Telefono>) {
    this.telefonos = j;
  }
  set setNotas(k: string) {
    this.notas = k;
  }

  public get getNombre(): string {
    return this.nombre;
  }
  public get getApellidos(): string {
    return this.apellidos;
  }
  public get getEdad(): number | string {
    return this.edad;
  }

  public get getDni(): string {
    return this.dni;
  }

  public get getCumpleanios(): string {
    let day: number = this.cumpleanios.getDate();
    let month: number = this.cumpleanios.getMonth() + 1;
    let year: number = this.cumpleanios.getFullYear();
    if (month < 10) return day + "/" + "0" + month + "/" + year;
    else return day + "/" + month + "/" + year;
  }

  public get getColorFavorito(): string {
    return this.colorFavorito;
  }

  public get getSexo(): string {
    return this.sexo;
  }

  public get getDirecciones(): Array<Direccion> {
    return this.direcciones;
  }
  public get getMails(): Array<Mail> {
    return this.mails;
  }
  public get getTelefonos(): Array<Telefono> {
    return this.telefonos;
  }

  public get getNotas(): string {
    return this.notas;
  }

  public mostrarDatos(): void {
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

  private getNombreCompleto(): string {
    return this.nombre + " " + this.apellidos;
  }

  private mostrarDirecciones() {
    console.log(
      "Las direcciones de la persona " + this.getNombreCompleto() + " son: "
    );

    let iterator: number = 1;
    for (let direccion of this.direcciones) {
      console.log("La direccion " + iterator + " es: ");
      direccion.mostrarDireccion();
      iterator++;
    }
    console.log("Esta persona no tiene más direcciones.");
  }

  private mostrarMails() {
    console.log(
      "Los mails de la persona " + this.getNombreCompleto() + " son: "
    );
    let iterator2: number = 1;
    for (let mail of this.getMails) {
      console.log(mail.mostrarMail(iterator2));
      iterator2++;
    }
  }

  private mostrarTelefonos() {
    console.log(
      "Los telefonos de la persona " + this.getNombreCompleto() + " son: "
    );
    for (let telefono of this.getTelefonos) {
      console.log(telefono.mostrarTelefono());
    }
  }
}
