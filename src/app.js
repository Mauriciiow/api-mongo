import  express  from "express";
import cors from 'cors'
import mongoose from 'mongoose';
import dbConnect from "./database/databaseConfig.js";
import clientesController from "./controller/ClientesController.js";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const DB_URI = process.env.MONGO_URI
app.use(express.json())
app.use(cors())


dbConnect(mongoose, DB_URI)
clientesController(app)


app.listen(port, ()=>{
    console.log(`https://localhost:${port}`)
})

