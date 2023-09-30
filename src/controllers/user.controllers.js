const userService = require('../services/user.service')

exports.findAll = async (request, response) => {
    try{
        const users = await userService.findAll()
        return response.status(200).json({
            status: 200,
            data: users,
            message: 'Usuários listados com sucesso'
        })
    } catch (e) {
        return response.send(400).json({
            status:400,
            message: e
        })
    }
}

exports.findByPk = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const user = await userService.findByPk(id)
        return response.status(200).json({
            status: 200,
            data: user,
            message: 'Usuários listados com sucesso'
        })
    } catch (e) {
        return response.send(400).json({
            status:400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try{
        const {username, icon, email, password, twitter, instagram, discord, twitch, biografia, status, corP, corS, favoritados, conquistas, imgFundo, imgFundoDois, dataCriacao} = request.body
        const user = await userService.create(username, icon, email, password, twitter, instagram, discord, twitch, biografia, status, corP, corS, favoritados, conquistas, imgFundo, imgFundoDois, dataCriacao)
        return response.status(201).json({
            message: 'Usuários listados com sucesso',
            body: {
                data: user
            }
        })
    } catch (e) {
        return response.send(400).json({
            status:400,
            message: e
        })
    }
}

exports.update = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const {username, icon, email, password, twitter, instagram, discord, twitch, biografia, status, corP, corS, favoritados, conquistas, imgFundo, imgFundoDois, dataCriacao} = request.body

        await userService.update(username, icon, email, password, twitter, instagram, discord, twitch, biografia, status, corP, corS, favoritados, conquistas, imgFundo, imgFundoDois, dataCriacao)
        return response.status(201).json({
            message: 'Usuários alterado com sucesso',
            body: {
                username: username, icon: icon, email: email, password: password, twitter: twitter, instagram: instagram, discord: discord, twitch: twitch, biografia: biografia, status: status, corP: corP, corS: corS, favoritados: favoritados, conquistas: conquistas, imgFundo: imgFundo, imgFundoDois: imgFundoDois, dataCriacao: dataCriacao

            }
        })
    } catch (e) {
        return response.send(400).json({
            status:400,
            message: e
        })
    }
}

exports.delete = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        await userService.delete(id)
        return response.status(200).json({
            message: 'Usuário deletado'
        })
    } catch (e) {
        return response.send(400).json({
            status:400,
            message: e
        })
    }
}
