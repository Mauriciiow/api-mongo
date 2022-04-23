import  express  from "express";
import cors from 'cors'
import mongoose from 'mongoose';
import dbConnect from "./database/databaseConfig.js";
import {router} from './routes/clientes.js'

const app = express()
const port = process.env.PORT || 3000




app.use(express.json())
app.use(cors())
app.use('/', router)

dbConnect(mongoose)


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

