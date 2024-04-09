const express = require('express');
const app = express();
const Usurario = require('./src/models/modelo');
const conection = require('./src/database/database');
const rotas = require('./src/router/rotas');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', rotas)

conection
    .authenticate().then( async () => {
    console.log('Conectado com o banco de dados')

    await conection.sync({ alter: true });
    console.log('Modelos sincronizados com o banco de dados')
})
    .catch((error) => {
        console.log('Ocorreu um erro ao conectar com o banco de dados:', error)
    })

app.listen(3001, () => {
    console.log('App rodando na porta 3001')
})
