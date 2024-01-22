const fs = require('fs');
const colors = require('colors');

let multiplicar = async ( num, listar, hasta)=>{

    try {

        let resp = "", imprimir = "";


        for(let i = 1; i <= hasta; i++){
            resp += '• '.black + `${num} x ${i} : ` + ` ${num * i}\n`.cyan;
            imprimir += '• ' + `${num} x ${i} : ` + ` ${num * i}\n`;
        };


        if (listar){
            console.log('-----------------'.rainbow);
            console.log(`Tabla del `.cyan + ` ${ num } `.bgCyan);
            console.log('-----------------'.rainbow);
            console.log(resp);  
            console.log('-----------------'.rainbow);  
        }

        fs.writeFileSync(`./out/tabla-${num}.txt`, imprimir);

        return `tabla-${num}.txt`;

    } catch (err) {
        console.log('Caracter ingresado incorrecto'.red);
        throw err;
    }

}

module.exports = {
    multiplicar
};
