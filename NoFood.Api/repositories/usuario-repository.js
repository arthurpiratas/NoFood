require('../models/usuario-model')
const base = require('../bin/base/repository-base')
const md5 = require('md5')

// classe
class usuarioRepository{

    constructor(){
        this._base = new base('UsuarioModel')
        this._projection = 'nome email _id'
    }

    async IsEmailExite(Email) {
        return await this._base._model.findOne({ email: Email }, this._projection)
    }

    async autentication(Email, Senha){
        let _hashSenha = md5(Senha) // criptografando a senha recebida 
        return await this._base._model.findOne({email: Email, senha: _hashSenha}, this._projection) /* busco o usuario a partir do email e senha criptografada
        e retorno a informação do nome, email e ID*/
    }

    async create(data){
        data.email = data.email.toLowerCase()
        let usuarioCriado = await this._base.create(data)
        return this._base._model.findById(usuarioCriado._id, this._projection)
    }

    async update(id, data){
        let newData = {
            nome: data.nome, 
            email: data.email.toLowerCase(), 
            foto: data.foto
        }
        let usuarioAtualizado = await this._base.update(id,newData)

        return this._base._model.findById(usuarioAtualizado._id, this._projection)
    }

    async getAll(){
        return await this._base._model.find({}, this._projection)
    }

    async getById(id){
        return await this._base._model.findById(id, 'nome email foto')
    }

    async delete(id){
        return await this._base.delete(id)
    }

}

// exportando
module.exports = usuarioRepository