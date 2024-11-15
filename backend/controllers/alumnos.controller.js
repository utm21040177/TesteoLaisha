import { Modelo } from "../models/alumnos.model.js";  //Le faltaba el .js
//debe estar en mayuscula el Modeloo

Modelo.create({//Aqui tambien debe estar en mayuscua el modelo
    name:"Rodolfo",//Name debe ser con minuscula y aqui esta en mayuscula
    Edad:25//Y aqui debe ser en mayuscula
})

export const test1 = ()=>{
    console.log("Funciona el controlador")
}