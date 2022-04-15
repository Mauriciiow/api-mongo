const dbConnect = async (mongoose)=>{
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/clientes') 

    const db = mongoose.connection
    
    db.on('error', (err)=> console.log(err))
    db.once('open', ()=> console.log('Database connected'))


}

export default dbConnect