const argv = require('./config/yargs').argv;
const colors =  require('colors');
const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];


switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
    break;
    case 'listar':
        
        let listado = porHacer.getListado();

        for( let lista of listado) {
            console.log(`==========Por hacer========`.green);
            console.log(`${lista.descripcion}`);
            console.log(`Estado: ${lista.completado}`);
            console.log(`===========================`.green);
        } 
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':
        let borrado = porHacer.eliminarTarea(argv.descripcion);
        console.log(borrado);
    break;    

    default:
        console.log('Comando no reconocido');
    break;
}