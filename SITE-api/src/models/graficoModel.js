var database = require("../database/config")

function listar() {
    var instrucao =
        `SELECT COUNT(idPersonagem) AS quantidade, nomePersonagem FROM personagem GROUP BY nomePersonagem;`
        ;
    return database.executar(instrucao);
}

module.exports = {
    listar
};