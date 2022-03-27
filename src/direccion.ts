export class Direccion {
  private calle: string;
  public get getCalle(): string {
    return this.calle;
  }
  public set setCalle(v: string) {
    this.calle = v;
  }

  private numero: number;
  public get getNumero(): number {
    return this.numero;
  }
  public set setNumero(v: number) {
    this.numero = v;
  }

  private piso: string | number;
  public get getPiso(): string | number {
    return this.piso;
  }
  public set setPiso(v: string | number) {
    this.piso = v;
  }

  private letra: string;
  public get getLetra(): string {
    return this.letra;
  }
  public set setLetra(v: string) {
    this.letra = v;
  }

  private codigoPostal: number;
  public get getCodigoPostal(): number {
    return this.codigoPostal;
  }
  public set setCodigoPostal(v: number) {
    this.codigoPostal = v;
  }

  private poblacion: string;
  public get getPoblacion(): string {
    return this.poblacion;
  }
  public set setPoblacion(v: string) {
    this.poblacion = v;
  }

  private provincia: string;
  public get getProvincia(): string {
    return this.provincia;
  }
  public set setProvincia(v: string) {
    this.provincia = v;
  }

  constructor(
    _calle: string,
    _numero: number,
    _piso: string | number,
    _letra: string,
    _codigoPostal: number,
    _poblacion: string,
    _provincia: string
  ) {
    this.calle = _calle;
    this.numero = _numero;
    this.piso = _piso;
    this.letra = _letra;
    this.codigoPostal = _codigoPostal;
    this.poblacion = _poblacion;
    this.provincia = _provincia;
  }

  public mostrarDireccion() {
    console.log(
      "Calle: " +
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
        this.provincia
    );
  }
}
