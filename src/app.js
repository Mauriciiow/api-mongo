import  express  from "express";
import cors from 'cors'
import mongoose from 'mongoose';
import dbConnect from "./database/databaseConfig.js";
import clientesController from "./controller/ClientesController.js";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


dbConnect(mongoose)
clientesController(app)


app.listen(port, ()=>{
    console.log(`https://localhost:${port}`)
})

