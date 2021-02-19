'use strict'

const repository = require('../repositories/usuario-repository')

const _repo =  new repository()

function usuarioController(){

}

usuarioController.prototype.post = async (req, res) =>{

    let resultado = await  _repo.create(req.body)
    res.status(201).send(resultado);

}

usuarioController.prototype.put = async (req, res) =>{
    let resultado = await  _repo.update(req.params.id, req.body)
   res.status(202).send(resultado)
}

usuarioController.prototype.get = async (req, res) =>{
    let lista = await  _repo.getAll()
    res.status(200).send(lista)
}

usuarioController.prototype.getById = async (req, res) =>{
    let resultado = await  _repo.getById(req.params.id)
    res.status(200).send(resultado)
}

usuarioController.prototype.delete = async (req, res) =>{
    let deletado = await  _repo.delete(req.params.id)
    res.status(204).send(deletado)
}

module.exports = usuarioController