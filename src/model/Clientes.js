import mongoose from "mongoose";

const Schema = mongoose.Schema;
const msg = `Sua senha deve ter: Tamanho de 8 caracteres
Somente letras e numeros
No mínimo uma letra maiúscula e minúscula 
`
const clientes = new Schema({
    nome: {type: String, required: [true, 'Informe um nome valido']},
    data_nascimento: {type: String, default: Date, required:[true, 'Informe uma data valida']},
    cpf: {type: String, required: [true, 'Informe um cpf valido com 11 digitos']},
    email: {type: String, required: [true, 'Informe um email valido, ex: email@email.com']},
    senha: {type: String, required: [true, msg]},
    genero: {type: String, required: [true, 'Informe um genero']},
  
},
{versionKey: false})



clientes.path('senha').validate((senha)=> {
    let senhaRe = /^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]{8,}/
    return senhaRe.test(senha); 
  }, `Sua senha deve ter: Tamanho de 8 caracteres
    Somente letras e numeros
    No mínimo uma letra maiúscula e minúscula 
  `)
    
clientes.path('email').validate((email)=> {
    let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;;
    return emailRegex.test(email); 
  }, 'Digite um email valido, ex: email@email.com')
  

clientes.path('nome').set((nome)=> {
    return nome.split(' ').map(e=>e.substr(0, 1).toUpperCase()+e.substr(1, e.length)).join(' ')
  });

  
  clientes.path('cpf').validate((cpf)=> {
    let cpfRe = /^[0-9]{11}/
    return cpfRe.test(cpf); 
  }, 'Digite um cpf valido');


export default mongoose.model('Clientes', clientes)


