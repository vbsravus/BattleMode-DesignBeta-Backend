module.exports = (sequelize, Sequelize) => {
    const Jogo = sequelize.define('jogo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        logo: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        descricaoLonga: {
            type: Sequelize.TEXT('long'),
            NotNull: true,
        },
        descricaoBreve: {
            type: Sequelize.TEXT('long'),
            NotNull: true,
        },
        imgFundo: {
            type: Sequelize.STRING,
            NotNull: true,
        },
        imgBackground: {
            type: Sequelize.STRING,
            NotNull: true,
        },


    },

        {
            timestamps: false,
        }
    )
    return Jogo
}