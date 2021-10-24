import { input } from '../view/input'
import { Miembro } from '../export/Miembro'
import { Profesor } from '../export/Profesor'

//Crea un nuevo miembro profesor
export const nuevoProf = async (miembros: Array<Miembro>) =>  {                                 
    let m: Miembro;
    const dni = await input('\ndni');
    const nombre = await input('nombre');
    const email = await input('email');
    const sueldo = parseInt( await input('sueldo') );
    const horasDia = parseInt( await input('horasDia') );
    const años = parseInt( await input('años') );
    const funcionario = Boolean( await input('funcionario') );
    const asignatura = await input('asignatura');
    m = new Profesor (dni, nombre, email, sueldo, horasDia, años, funcionario, asignatura);
    miembros.push(m);
}
