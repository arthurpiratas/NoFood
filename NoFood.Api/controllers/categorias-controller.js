'use strict'
require('../models/categoria-models')
const repository = require('../repositories/categoria-repository')

const _repo =  new repository()

function categoriaController(){

}

categoriaController.prototype.post = async (req, res) =>{

    let resultado = await _repo.create(req.body)
    res.status(201).send(resultado);
}

categoriaController.prototype.put = async (req, res) =>{

   let resultado = await _repo.update(req.params.id, req.body)
   res.status(202).send(resultado)
}

categoriaController.prototype.get = async (req, res) =>{

    let lista = await _repo.getAll()
    res.status(200).send(lista)
    
}

categoriaController.prototype.getById = async (req, res) =>{

    let resultado = await _repo.getById(req.params.id)
    res.status(200).send(resultado)
}

categoriaController.prototype.delete = async (req, res) =>{

    let deletado = await _repo.delete(req.params.id)
    res.status(204).send(deletado)
}

module.exports = categoriaController