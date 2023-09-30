const db = require('../models')
const User = db.users

exports.findAll = async () => {
    try{
        const users = await User.findAll({
            attributes:['id', 'username', 'icon', 'email', 'password', 'twitter', 'instagram', 'discord', 'twitch', 'biografia', 'status', 'corP', 'corS', 'favoritados', 'conquistas', 'imgFundo', 'imgFundoDois', 'dataCriacao']
        })
        return users
    }catch(e){
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    }
}

exports.findByPk = async(id) => {
    try{
        const users = await User.findByPk(id, {
            attributes:['id', 'username', 'icon', 'email', 'password', 'twitter', 'instagram', 'discord', 'twitch', 'biografia', 'status', 'corP', 'corS', 'favoritados', 'conquistas', 'imgFundo', 'imgFundoDois', 'dataCriacao']
        })
        return users
    }catch(e){
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    }
}

exports.create = async(username, icon, email, password, twitter, instagram, discord, twitch, biografia, status, corP, corS, favoritados, conquistas, imgFundo, imgFundoDois, dataCriacao) => {
    try{
        const user = await User.create({username: username, icon: icon, email: email, password: password, twitter: twitter, instagram: instagram, discord: discord, twitch: twitch, biografia: biografia, status: status, corP: corP, corS: corS, favoritados: favoritados, conquistas: conquistas, imgFundo: imgFundo, imgFundoDois: imgFundoDois, dataCriacao: dataCriacao})
        return user
    }catch(e){
        throw Error('Erro ao inserir o usuário: ' + username + ' ERROR: ' + e.message)
    }
}

exports.update = async(username, icon, email, password, twitter, instagram, discord, twitch, biografia, status, corP, corS, favoritados, conquistas, imgFundo, imgFundoDois, dataCriacao) => {
    try{
        await User.update({
            username: username, icon: icon, email: email, password: password, twitter: twitter, instagram: instagram, discord: discord, twitch: twitch, biografia: biografia, status: status, corP: corP, corS: corS, favoritados: favoritados, conquistas: conquistas, imgFundo: imgFundo, imgFundoDois: imgFundoDois, dataCriacao: dataCriacao
        }, {where: {id: id}})

    }catch(e){
        throw Error('Erro ao alterar o usuário: ' + username + ' ERROR: ' + e.message)
    }
}
