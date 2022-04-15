import  express  from "express";
import mongoose from 'mongoose';
import dbConnect from "./database/databaseConfig.js";
import clientesController from "./controller/ClientesController.js";

const app = express()
app.use(express.json())
// app.use(cors())
const port = 3000

dbConnect(mongoose)
clientesController(app)


app.listen(port, ()=>{
    console.log(`https://localhost:${port}`)
})

