const Usuario = require('../models/modelo')

const controleUsuario = {

    async cadastrar(req, res) {
        try {
            const data = req.body;
            console.log(data)
            await Usuario.create(data);
            res.status(200).json({ message: 'Usuário criado com sucesso!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao criar o usuário!' })
        }
    },
    async buscarTodos(req, res) {
        try {
            const data = await Usuario.findAll()
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao buscar o usuário!' })
        }
    },

    async buscarUm(req, res) {
        try {
            const id = req.params.id
            const data = await Usuario.findOne({ where: { id: id } })
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao buscar o usuário!' + error })
        }
    },
    async deletar(req, res) {
        try {
            const id = req.params.id
            const data = await Usuario.destroy({ where: { id: id } })
            res.status(200).json({ message: 'Usuário deletado com sucesso!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao deletar o usuário!' })
        }
    },

    async atualizar(req, res) {
        try {
            const id = req.params.id
            const data = req.body
            await Usuario.update(data, { where: { id: id } })
            res.status(200).json({ message: 'Usuário atualizado com sucesso!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao atualizar o usuário!' })
        }
    }
}

module.exports = controleUsuario;