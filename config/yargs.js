const colors = require('colors');
const argv = require('yargs')
            .option('b', {
                alias: "base",
                type: "number",
                demandOption: true,
                describe: 'Número a multiplicar'.blue
            })
            .option('l', {
                alias: "listar",
                type: "boolean",
                default: false,
                describe: 'Mostrar la tabla en consola'.blue
            })
            .option('h', {
                alias: "hasta",
                type: "number",
                default: 10,
                describe: 'Indicar número limite'.blue
            })
            .check((argv, options) => {
                if( isNaN(argv.b)){
                    throw "La base debe ser un número".red;
                }
                if( isNaN(argv.h)){
                    throw "El limite debe ser un número".red;
                }
                return true;
            })
            .argv;

module.exports = argv;