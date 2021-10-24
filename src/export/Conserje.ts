import { Miembro } from "./Miembro";

export class Conserje extends Miembro {
    private _horasExtra: number
    private _ingreso: Date
    constructor(
        dni: string,
        nombre: string,
        email: string,
        sueldo: number,
        horasDia: number,
        años: number,
        funcionario: boolean,
        horasExtras: number,
        ingreso: Date) {
            super(dni, nombre, email, sueldo, horasDia, años, funcionario);
            this._horasExtra = horasExtras;
            this._ingreso = ingreso;
        }

        sueldoTotal(): number | any {
            let ingreso: Date = this._ingreso
            let fecha: Date = new Date("2015-01-01")
            let sueldoTotal: number = super.sueldoTotal()
            let años: number = super.años
            let horasExtras: number = this._horasExtra
            let funcionario: boolean = super.funcionario
            let horas: number = super.horasDia

            //Calculo del sueldo en funcion de la normativa. Cambian los pagos dependiendo de cuando fueron contratados.
            if (funcionario) {
                sueldoTotal = sueldoTotal * (10.5 * horas)
                if (ingreso < fecha) {
                    sueldoTotal = (super.sueldoTotal() + ( 15 * años ) ) + (10 * horasExtras)
                } else {
                    sueldoTotal = (super.sueldoTotal() + ( 14.5 * años ) ) + (9 * horasExtras)
                }
            } else {
                sueldoTotal = sueldoTotal * (9.5 * horas)
                if (ingreso < fecha) {
                    sueldoTotal = (super.sueldoTotal() + ( 15 * años ) ) + (10 * horasExtras)
                } else {
                    sueldoTotal = (super.sueldoTotal() + ( 14.5 * años ) ) + (9 * horasExtras)
                }
            }
            return sueldoTotal
        }

        datos(){
            let resultado: string
            resultado = `${super.datos()}, 
              Horas extra: ${this._horasExtra},
              Fecha de ingreso: ${this._ingreso}`
            return resultado
          }

}