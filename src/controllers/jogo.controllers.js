const jogoService = require('../services/jogo.service')

exports.findAll = async (request, response) => {
    try {
        const jogo = await jogoService.findAll()
        return response.status(200).json({
            status: 200,
            data: jogo,
            message: 'jogos listados com sucesso'
        })
    } catch (e) {
        return response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findByPk = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const jogo = await jogoService.findByPk(id)
        return response.status(200).json({
            status: 200,
            data: jogo,
            message: 'jogos  listados com sucesso'
        })
    } catch (e) {
        return response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try {
        const {nome, logo, descricaoLonga, descricaoBreve, imgFundo, imgBackground } = request.body
        const jogo = await jogoService.create(nome, logo, descricaoLonga, descricaoBreve, imgFundo, imgBackground )
        return response.status(201).json({
            message: 'jogo cadastrado com sucesso',
            body: {
                data: jogo
            }
        })
    } catch (e) {
        return response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const {nome, logo, descricaoLonga, descricaoBreve, imgFundo, imgBackground } = request.body

        await jogoService.update(nome, logo, descricaoLonga, descricaoBreve, imgFundo, imgBackground)
        return response.status(201).json({
            message: 'jogo alterado com sucesso',
            body: {
                nome: nome, logo: logo, descricaoLonga: descricaoLonga, descricaoBreve: descricaoBreve, imgFundo: imgFundo, imgBackground:imgBackground
            }
        })
    } catch (e) {
        return response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.delete = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        await jogoService.delete(id)
        return response.status(200).json({
            message: 'jogo deletado'
        })
    } catch (e) {
        return response.send(400).json({
            status: 400,
            message: e
        })
    }
}

