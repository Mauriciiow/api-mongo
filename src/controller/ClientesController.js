import Clientes from "../model/Clientes.js";
import mongoose from "mongoose";

const clientesController = (app)=>{

    app.get('/clientes', async (req, res)=>{

        try {
            const clientes = await Clientes.find() 
            res.status(200).json({"clientes": clientes })
        } catch (error) {
            res.status(400).json({"erro": true, 'msg': error.message })
        }
    })


    app.get('/cliente/:id', async (req, res)=>{
        
        try {
            const id = req.params.id
           const clienteEncontrado = await Clientes.findById(id)

            res.status(200).json({"msg": "cliente encontrado", "cliente": clienteEncontrado})
        } catch (error) {
            res.status(400).json({"erro": true, 'msg': error.message })
        }
    })

    app.post('/clientes', async (req, res)=>{
        
        try {
            const body = req.body
            const clienteNovo = new Clientes({
                nome: body.nome,
                idade: body.idade,
                cpf: body.cpf,
                email: body.email,
                senha: body.senha,
                genero: body.genero,
                autorizacao: body.autorizacao,
                
            })

            const cliente = await clienteNovo.save()
            res.status(200).json({"cliente adicionado": cliente })
        } catch (error) {
            res.status(400).json({"erro": true, 'msg': error.message })
        }
    })
    

    app.put('/cliente/:id', async (req, res)=>{
        try {
            const id = req.params.id
            const body = req.body
            await Clientes.updateOne({_id: id}, {$set: {nome: body.nome, idade: body.idade, cpf: body.cpf, email: body.email, senha: body.senha,
            genero: body.genero, autorizacao: body.autorizacao}})

            res.status(200).json({"msg": "cliente atualizado", "novos dados": body})
        } catch (error) {
            res.status(400).json({"erro": true, 'msg': error.message })
        }
    })
}

export default clientesController