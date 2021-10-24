import { input } from '../view/input'
import { Miembro } from '../export/Miembro'
import { Conserje } from '../export/Conserje'

//Crea un nuevo miembro conserje
export const nuevoCons = async (miembros: Array<Miembro>) =>  {                                 
    let m: Miembro;
    const dni = await input('\ndni');
    const nombre = await input('nombre');
    const email = await input('email');
    const sueldo = parseInt( await input('sueldo') );
    const horasDia = parseInt( await input('horasDia') );
    const años = parseInt( await input('años') );
    const funcionario = Boolean( await input('funcionario') );
    const horasExtras = parseInt( await input('horasExtras') );
    const ingreso = new Date( await input('ingreso') );
    m = new Conserje (dni, nombre, email, sueldo, horasDia, años, funcionario, horasExtras, ingreso);
    miembros.push(m);
}

//Actualizar el numero de horas por dia
export const modificar  = async (miembros: Array<Miembro>)  => {
    if (miembros.length > 0){
            let DNI: string = (await input('\nDNI del miembro '));
            let nuevasHoras : number = parseInt( await input('\nNuevas horas') );
            miembros.map( (m) => {              
                if (m.dni == DNI)
                {
                    m.horasDia = nuevasHoras;
                }
            } );
    }else{
        console.log(`\nNo existe ese miembro`)
    }
}