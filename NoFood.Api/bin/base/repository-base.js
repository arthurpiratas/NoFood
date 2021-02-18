'use strict'

const mongoose = require('mongoose')


class repositoryBase {

    constructor(model){
        this._model = mongoose.model(model) // criando uma variável privada this._model
    }

    async create(data){
        let modelo = new this._model(data)
        let resultado = await modelo.save(); 
        return resultado
    }

    async update(id, data){
        await this._model.findByIdAndUpdate(id, {$set: data })
        let resultado = await this._model.findById(id)
        return resultado
    }

    async getAll(){
        return await this._model.find()
    }

    async getById(id){
        let categoria = await this._model.findById(id)
        return categoria
    }

    async delete(id){
        return await this._model.findByIdAndRemove(id)
    }
}

module.exports = repositoryBase