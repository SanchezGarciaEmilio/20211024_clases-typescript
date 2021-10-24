import { input } from '../view/input'
import { Miembro } from '../export/Miembro'

//Nos muestra todos los miembros
export const todo = async (miembros: Array<Miembro>) => {
    for (let m of miembros) {
        console.log(m.datos())
        console.log(`Sueldo total: ${m.sueldoTotal()}`);
    }
}

//Elimina un miembro del array
export const eliminar = async (miembros: Array<Miembro>) =>  {
    let dniEliminar: string = await input('\nDni del empleado');
    for(  let i = 0; i < miembros.length; i++){ 
        if ( miembros[i].dni == dniEliminar) { 
            miembros.splice(i, 1); 
        }
    }
    console.log('Eliminado');
}

//Nos muestra toda la información de un solo miembro
export const buscador = async (miembros: Array<Miembro>)  => {
    let index: number
    let dni: string = (await input('\nIntroduce DNI del empleado a buscar: '));
    if (miembros != undefined){
        index = miembros.findIndex(( (obj) => obj.dni == dni));
        console.log(miembros[index].datos())
        console.log(`Sueldo total: ${miembros[index].sueldoTotal()}`);
    }
}
