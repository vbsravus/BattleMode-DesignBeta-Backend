const db = require('../models')
const Jogo = db.jogo

exports.findAll = async () => {
    try {
        const jogo = await Jogo.findAll({
            attributes: ['id', 'nome', 'logo', 'descricaoLonga', 'descricaoBreve', 'imgFundo' ,'imgBackground' ]
        })
        return jogo
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os jogo. ERROR: ' + e.message)
    }
}

exports.findByPk = async (id) => {
    try {
        const jogo = await Jogo.findByPk(id, {
            attributes: ['id', 'nome', 'logo', 'descricaoLonga', 'descricaoBreve', 'imgFundo' ,'imgBackground']
        })
        return jogo
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar os jogo. ERROR: ' + e.message)
    }
}

exports.create = async (nome, logo, descricaoLonga, descricaoBreve, imgFundo, imgBackground) => {
    try {
        const jogo = await Jogo.create({ nome: nome, logo: logo, descricaoLonga: descricaoLonga, descricaoBreve: descricaoBreve, imgFundo: imgFundo, imgBackground:imgBackground })
        return jogo
    } catch (e) {
        return e.message
    }
}

exports.update = async (id, nome, logo, descricaoLonga, descricaoBreve, imgFundo, imgBackground) => {
    try {
        await Jogo.update({
            nome: nome, logo: logo, descricaoLonga: descricaoLonga, descricaoBreve: descricaoBreve, imgFundo: imgFundo, imgBackground:imgBackground
        }, { where: { id: id } })

    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + titulo + ' ERROR: ' + e.message)
    }
}