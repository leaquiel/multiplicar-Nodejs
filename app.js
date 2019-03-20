// import { crearArchivo } from './multiplicar/multiplicar';
// Asi se hace en ES6 aparentemente pero rompe por alguna razon
const { argv } = require('./config/yargs');

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// se realizo una destructuracion 
let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}