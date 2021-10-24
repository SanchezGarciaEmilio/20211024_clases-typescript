export class Miembro {
    //Declaración de variables
    private _dni: string
    private _nombre: string
    private _email: string
    private _sueldo: number //salario base que cobra sin contar las horas trabajadas
    protected _horasDia: number //usamos protected para poder editarlo
    private _años: number
    private _funcionario: boolean
    constructor(
        dni: string,
        nombre: string,
        email: string,
        sueldo: number,
        horasDia: number,
        años: number,
        funcionario: boolean) {
            this._dni = dni,
            this._nombre = nombre,
            this._email = email,
            this._sueldo = sueldo,
            this._horasDia = horasDia,
            this._años = años,
            this._funcionario = funcionario
        }

    //Gets
    get dni() {
        return this._dni
    }
    get nombre() {
        return this._nombre
    }
    get email() {
        return this._email
    }
    get sueldo() {
        return this._sueldo
    }
    get horasDia() {
        return this._horasDia
    }
    set horasDia(nuevasHoras: number){    // Necesario para poder modificar
        this._horasDia = nuevasHoras
      }
    get años() {
        return this._años
    }
    get funcionario() {
        return this._funcionario
    }

    //Operaciones
    sueldoTotal(): number | any {
        let sueldoTotal: number = this._sueldo
        let funcionario: boolean = this._funcionario
        let horas: number = this._horasDia

        //Calculo del sueldo dependiendo si son funcionarios o no.
        if (funcionario) {
            sueldoTotal = sueldoTotal * (10.5 * horas)
        } else {
            sueldoTotal = sueldoTotal * (9.5 * horas)
        }
        return sueldoTotal
    }

    datos() {
        //Comprobamos si es funcionario para devolver un valor más visible que True o False
        let funcionario: boolean = this._funcionario
        let funcionarioString: string
        if (funcionario) {
            funcionarioString = "Si"
        } else {
            funcionarioString = "No"
        }

        return `
        Nombre: ${ this._nombre },
        DNI: ${ this._dni },
        Email: ${ this._email },
        Sueldo base: ${ this._sueldo },
        Horas por dia: ${ this._horasDia },
        Años de trabajo: ${this._años},
        Funcionario: ${ funcionarioString }
        `
    }
}


