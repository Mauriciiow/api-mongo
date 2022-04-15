

const dbConnect = async (mongoose)=>{
    
    const DB_URI = process.env.MONGODB_URI

    await mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}) 
    

    const db = mongoose.connection
    
    db.on('error', (err)=> console.log(err))
    db.once('open', ()=> console.log('Database connected'))


}

export default dbConnect