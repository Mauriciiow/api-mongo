
const dbConnect = async (mongoose)=>{
  
    await mongoose.connect('mongodb+srv://mauricio:Mau_ricio0-9@clientes.68k0l.mongodb.net/clientes', {useNewUrlParser: true, useUnifiedTopology: true}) 
    

    const db = mongoose.connection
    
    db.on('error', (err)=> console.log(err))
    db.once('open', ()=> console.log('Database connected'))


}

export default dbConnect