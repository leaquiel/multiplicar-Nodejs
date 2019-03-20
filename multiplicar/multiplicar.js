// requireds 
const fs = require('fs');
const colors = require('colors');
// const fs = require('fs');
// require propio de un proyecto de node, libreria existente en node

// const fs = require('express');
// paquete no nativo de node, se tiene q instalar

// const fs = require('./fs');
// archivos que escribimos y deberian estar en algun lado de nuestro proyecto
// se pone ./ y la ubicacion relativa


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Los valores ingresados tienen que ser numeros`);
            return;
        }

        let lista = '';
        lista += '=================='.green;
        lista += `\ntabla del ${base}`.red;
        lista += '\n=================='.green;

        for (let i = 0; i <= limite; i++) {
            lista += `\n${base} * ${i} = ${base*i}`;
        }

        resolve(lista);
    })

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}