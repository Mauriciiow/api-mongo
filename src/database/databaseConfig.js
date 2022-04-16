import 'dotenv/config'



const dbConnect = async (mongoose)=>{
    const mongo_url = process.env.MONGO_URL
    await mongoose.connect(mongo_url || 'http://localhost:3000/clientes' , {useNewUrlParser: true, useUnifiedTopology: true}) 
    

    const db = mongoose.connection
    
    db.on('error', (err)=> console.log(err))
    db.once('open', ()=> console.log('Database connected'))


}

export default dbConnect