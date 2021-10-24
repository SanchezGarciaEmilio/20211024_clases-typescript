import { menu } from './view/menu'
import { Miembro } from './export/Miembro'
import { nuevoProf } from './util/funciones-profesor';
import { nuevoCons, modificar } from './util/funciones-conserje';
import { todo, eliminar, buscador } from './util/funciones';

//Menu
const main = async () => {
    let miembros: Array<Miembro> = new Array<Miembro>();
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1: //Nuevo profesor
                await nuevoProf(miembros)
                break
            case 2: //Nuevo conserje
                await nuevoCons(miembros)
                break
            case 3: //Ver todos
                await todo(miembros)
                break
            case 4: //Modificar horas extras
                await modificar(miembros)
                break
            case 5: //Borrar miembro
                await eliminar(miembros)
                break
            case 6: //Buscador    
                await buscador(miembros)
                break
            case 0:
                console.log('\nSaliendo...')
        }
    }while (n != 0)
}
main()


