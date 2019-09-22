const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer')

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====Por Hacer===='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====Por Hacer===='.green);
        }
        break;
    case 'actualizar':
        console.log('Crear por hacer');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}