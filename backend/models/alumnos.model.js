//COMO Y EL DONDE SE GUARDAN LOS DATOS
import{Schema, model} from "mongoose";//La "s" de "schemas" estaba en minuscula     //Le faltaba una o a "mongoose"

const Eschemas = new Schema({
    name:{
        type:String
    },
    Edad:{
        type:Number
    }
})
export const Modelo = new model("Tabla de alumnos", Eschemas) //Le faltaba una "s" a Eschema