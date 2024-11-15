import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test1} from "./backend/controllers/alumnos.controller.js"
dotenv.config();

mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("jala esta madre")
})
.catch((error)=>{
    console.log("no funciona esta madre ")
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha correcto, no escucha borroso")
})
test1() //Aqui debe ser test1 y aqui lo tenia solo como test