import { Miembro } from "./Miembro";

export class Profesor extends Miembro {
    private _asignatura: string
    constructor(
        dni: string,
        nombre: string,
        email: string,
        sueldo: number,
        horasDia: number,
        años: number,
        funcionario: boolean,
        asignatura: string,) {
            super(dni, nombre, email, sueldo, horasDia, años, funcionario);
            this._asignatura = asignatura;
        }

        sueldoTotal(): number | any {
            let sueldoTotal: number = super.sueldoTotal()
            let años: number = super.años
            let trienio: number
            let funcionario: boolean = super.funcionario
            let horas: number = super.horasDia

            //Calculo del trienio
            if (funcionario) {
                sueldoTotal = sueldoTotal * (10.5 * horas)
                trienio = Math.trunc(años/3)
                sueldoTotal = super.sueldoTotal() + ( trienio * 100 )
            } else {
                sueldoTotal = sueldoTotal * (9.5 * horas)
                trienio = Math.trunc(años/3)
                sueldoTotal = super.sueldoTotal() + ( trienio * 100 )
            }
            return sueldoTotal
        }

        datos(){
            let resultado: string
            resultado = `${super.datos()}, 
              Asignatura: ${this._asignatura},`
            return resultado
          }
}

