const dbConnect = async (mongoose)=>{
    await mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true, useUnifiedTopology: true}) 

    const db = mongoose.connection
    
    db.on('error', (err)=> console.log(err))
    db.once('open', ()=> console.log('Database connected'))


}

export default dbConnect