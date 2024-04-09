const express = require('express');
const controleUsuario = require('../controllers/controle');


const rota = express.Router();

rota.post('/postar', controleUsuario.cadastrar)
rota.get('/todos', controleUsuario.buscarTodos)
rota.get('/buscar/:id', controleUsuario.buscarUm)
rota.delete('/deletar/:id', controleUsuario.deletar)
rota.put('/atualizar/:id', controleUsuario.atualizar)


module.exports = rota