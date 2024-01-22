const { multiplicar } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
// console.log(argv);

multiplicar(argv.b, argv.l, argv.h)
    .then(resp => console.log(resp.green, 'creado'.green))
    .catch(err => console.log(err));

