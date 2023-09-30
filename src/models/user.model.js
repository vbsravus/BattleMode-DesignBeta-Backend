module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: Sequelize.STRING,
            notNull: true,
            is: /^[a-zA-z0-9\._]{4, 32}$/,
            unique: true
        },
        icon:{
            type: Sequelize.STRING,
            notNull: true,
            defaultValue: "https://raw.githubusercontent.com/vbsravus/BattleMode/main/Source/userDefault.png"
        },
        email: {
            type: Sequelize.STRING,
            notNull: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            notNull: true
        },
        twitter: {
            type: Sequelize.STRING,
            notNull: true,
            defaultValue: "Não informado"
        },
        instagram: {
            type: Sequelize.STRING,
            notNull: true,
            defaultValue: "Não informado"
        },
        discord: {
            type: Sequelize.STRING,
            notNull: true,
            defaultValue: "Não informado"
        },
        twitch: {
            type: Sequelize.STRING,
            notNull: true,
            defaultValue: "Não informado"
        },
        biografia: {
            type: Sequelize.TEXT('long'),
            notNull: true,
            defaultValue: "Olá, sou **novo** por aqui!"
        },
        status: {
            type: Sequelize.CHAR(12),
            notNull: true,
            defaultValue: "Básico"
        },
        corP: {
            type: Sequelize.CHAR(12),
            notNull: true,
            defaultValue: "#fc6b03"
        },
        corS: {
            type: Sequelize.CHAR(12),
            notNull: true,
            defaultValue: "#fc6b03"
        },
        favoritados: {
            type: Sequelize.TEXT('long'),
            notNull: true,
            defaultValue: "[]"
        },
        conquistas: {
            type: Sequelize.TEXT('long'),
            notNull: true,
            defaultValue: "[]"
        },
        imgFundo: {
            type: Sequelize.STRING,
            notNull: true,
            defaultValue: "https://raw.githubusercontent.com/vbsravus/BattleMode/main/Source/userDefaultBackground.png"
        },
        imgFundoDois: {
            type: Sequelize.STRING,
            notNull: true,
            defaultValue: "null"
        },
        dataCriacao: {
            type: Sequelize.STRING,
            notNull: true,
            defaultValue: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
        }
   

    },
    


    {
        timestamps: false,
    }
)
    return User
}