
const fs = require('fs');

let listadoPorHacer = [];

const db = ()=>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./db/data.json`,data, (err) =>{
        if(err) throw new Error('No es posible grabar ', err)
        else {
            console.log('archivo creado')
        }
    })
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const porhacer = (descripcion)=>{
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    db();
    return listadoPorHacer;
}

const crear = (descripcion)=>{
    
    cargarDB();
    porhacer(descripcion);    
    
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizarTarea = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0){
        listadoPorHacer[index].completado = completado
        db();
        return true;
    }else{
        return false;
        
    }
};

const eliminarTarea = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if(index.length == listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = index;
        db()
        return true;
    }

};

module.exports = {
    crear,
    getListado,
    actualizarTarea,
    eliminarTarea
}
