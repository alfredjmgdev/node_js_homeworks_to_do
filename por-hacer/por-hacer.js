const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(console.log(`Tarea guardada exitosamente`));
            }
        });

    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer
}

module.exports = {
    crear
}