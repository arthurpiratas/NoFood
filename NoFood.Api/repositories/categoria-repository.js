const mongoose = require('mongoose')
require('../models/categoria-models')
const CategoriaModel = mongoose.model('CategoriaModel')

class categoriaRepository {

    constructor(){}

    async create(data){
        let categoria = new CategoriaModel(data)
        let resultado = await categoria.save(); 
        return resultado
    }

    async update(id, data){
        await CategoriaModel.findByIdAndUpdate(id, {$set: data })
        let resultado = await CategoriaModel.findById(id)
        return resultado
    }

    async getAll(){
        return await CategoriaModel.find()
    }

    async getById(id){
        let categoria = await CategoriaModel.findById(id)
        return categoria
    }

    async delete(id){
        return await CategoriaModel.findByIdAndRemove(id)
    }
}

module.exports = categoriaRepository