module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "ravusdb",
    DB: "battlemode",
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
