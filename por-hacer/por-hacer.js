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

const getListado = (descripcion) => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    
    // let index =listadoPorHacer.findIndex( tarea => {
    //     return tarea.descripcion === descripcion;
    // })

    let index =listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();
    // let index =listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    let nuevoListado = listadoPorHacer.filter( tarea  => {
        return tarea.descripcion !== descripcion
    });

    console.log(nuevoListado);

    if( listadoPorHacer.length === nuevoListado.length ) {
        return false
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
    }

    // if(index) {
    //     // delete listadoPorHacer[index];
    //     console.log(listadoPorHacer);
    //     return true;
    // }else{
    //     return false;
    // }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}