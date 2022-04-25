import Clientes from "../model/Clientes.js"
import  express  from "express";
 export const router = express.Router()

    router.get('/', async (req, res)=>{
        res.send('Api clientes :)')
    
    })
    
    router.get('/clientes', async (req, res)=>{
    
        try {
            const clientes = await Clientes.find() 
            
            if (!clientes) {
                res.status(500)
                return
            }
            res.status(200).json({"clientes": clientes})
        } catch (error) {
            res.status(400).json({"erro": true, 'msg': error.message })
        }
    })
    
    
    router.get('/cliente/:id', async (req, res)=>{
        
        try {
            const id = req.params.id
           const clienteEncontrado = await Clientes.findById(id)
           if (!clienteEncontrado) {
               res.status(404).json({"message": "cliente nao encontrado", "erro": true})
               return
           }
    
            res.status(200).json({"message": "cliente encontrado", "cliente": clienteEncontrado})
        } catch (error) {
            res.status(400).json({"erro": true, 'msg': error.message })
        }
    })
    
    
    router.post('/clientes', async (req, res)=>{
       
        try {
            const body = req.body
            const email = req.body.email
            const testaEmail = await Clientes.find({email: email})
          
            if (testaEmail.length > 0) {
               res.status(400).json({"message": "Email ja cadastrado", "erro": true})
               return
            } 
            const clienteNovo = new Clientes({
                nome: body.nome,
                data_nascimento: body.data_nascimento,
                cpf: body.cpf,
                email: body.email,
                senha: body.senha,
                genero: body.genero
            })
            const cliente = await clienteNovo.save()
            res.status(200).json({"cliente adicionado": cliente })
    
            
           
           
        } catch (error) {
            res.status(400).json({"erro": true, 'msg': error.message })
        }
    })
    
    
    router.post('/cliente/login', async (req, res)=>{
        try {
            const {email, senha} = req.body
            const login = await Clientes.findOne({email: email, senha: senha})
            if (!login) {
               res.status(422).json({"message": "o usuario nao foi encontrado"})
                return
            } 
            res.status(200).json({'mensagem': 'encontrei', 'cliente': login})
            
        } catch (error) {
            res.status(404).json({"mensagem": error.menssage, "erro": true})
            
        }
    })
    
    router.patch('/cliente/:id', async (req, res)=>{
        try {
            const id = req.params.id
            const body = req.body
            const response = await Clientes.updateOne({_id: id}, body)
            console.log(response);
            if (response.matchedCount === 0) {
                res.status(422).json({"message": "usuario nao encontrado", "erro": true})
                return
            }
    
            res.status(200).json({"message": "cliente atualizado", "cliente": body})
        } catch (error) {
            res.status(400).json({"erro": true, 'msg': error.message })
        }
    })

