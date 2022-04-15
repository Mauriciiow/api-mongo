import dotenv from "dotenv";
dotenv.config()

const dbConnect = async (mongoose)=>{
    const DB_URI =process.env.MONGO_URI
    await mongoose.connect(DB_URI ||'mongodb://localhost/clientes', {useNewUrlParser: true, useUnifiedTopology: true}) 

    const db = mongoose.connection
    
    db.on('error', (err)=> console.log(err))
    db.once('open', ()=> console.log('Database connected'))


}

export default dbConnect