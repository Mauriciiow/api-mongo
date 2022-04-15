const dbConnect = async (mongoose)=>{
    await mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true, useUnifiedTopology: true}) || mongoose.connect(process.env.MONGODB_URI)

    const db = mongoose.connection
    
    db.on('error', (err)=> console.log(err))
    db.once('open', ()=> console.log('Database connected'))


}

export default dbConnect