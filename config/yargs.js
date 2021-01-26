const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
                    .command('crear', 'Crea nueva tarea por hacer',{
                        descripcion
                    })
                    .command('actualizar', 'lista todas las tareas por hacer', {
                        descripcion,
                        completado
                    })
                    .command('borrar', 'Borrar registros de tareas',{
                        descripcion
                    })
                    .help()
                    .argv;

module.exports= {
    argv
}