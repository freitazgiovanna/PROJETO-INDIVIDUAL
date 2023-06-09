var database = require("../database/config")

function listar() {
    var instrucao = `
    SELECT COUNT(idPersonagem) AS quantidade, nomePersonagem FROM personagem GROUP BY nomePersonagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirFotoEFrase(escolha, idUsuario) {
    var instrucao = `
        INSERT INTO personagem (nomePersonagem, fkUsuario) VALUES ('${escolha}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    exibirFotoEFrase,
    listar
};