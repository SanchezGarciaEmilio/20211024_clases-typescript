import { input } from './input'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('0.- Salir')
    console.log('1.- Nuevo profesor')
    console.log('2.- Nuevo conserje')
    console.log('3.- Ver miembros')
    console.log('4.- Modificar horas extras conserjes')
    console.log('5.- Borrar miembro')
    console.log('6.- Buscador')
    n = parseInt( await input('Option') )
    return n
}