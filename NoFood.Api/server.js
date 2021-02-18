'use strict'

const app = require('../NoFood.Api/bin/express') /*o app é o servidor */
const variables = require('../NoFood.Api/bin/configuration/variable')

app.listen(variables.Api.port, ()=> { console.log(`API inicializada com sucesso na porta ${variables.Api.port}`)}) 



