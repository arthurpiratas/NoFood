const mongoose = require('mongoose')
require('../models/produto-model')
const ProdutoModel = mongoose.model('ProdutoModel')

class produtoRepository{

    constructor(){}

    async create(data){
        let produto = new ProdutoModel(data)
        let resultado = await produto.save(); 
        return resultado
    }

    async update(id, data){
        await ProdutoModel.findByIdAndUpdate(id, {$set: data })
        let resultado = await ProdutoModel.findById(id)
        return resultado
    }

    async getAll(){
        return await ProdutoModel.find()
    }

    async getById(id){
        let produto = await ProdutoModel.findById(id)
        return produto
    }

    async delete(id){
        return await ProdutoModel.findByIdAndRemove(id)
    }

}

module.exports = produtoRepository