const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const variable = require('../bin/configuration/variable')

//routers
const categoriaRouter = require('../routes/categoria-router')
const produtoRouter = require('../routes/produto-router')
const usuarioRouter = require('../routes/usuario-router')

const variables = require('../bin/configuration/variable')

//Criando/Invocando a API-server web do Express
const app = express()

//Confirguração de parse Json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Configurando a conexão com banco de dados 
mongoose.connect(variables.Database.conection, { useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})

//configurar rotas
app.use('/api/categoria', categoriaRouter)
app.use('/api/produto', produtoRouter)
app.use('/api/usuario', usuarioRouter)


// expoprtando a nossa APi(variável app)
module.exports = app 


