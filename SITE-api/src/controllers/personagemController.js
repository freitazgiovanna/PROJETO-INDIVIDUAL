var personagemModel = require("../models/personagemModel");

function listar(req, res) {
    personagemModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function exibirFotoEFrase(req, res) {
    var escolha = req.body.escolhaServer;
    
    var idUsuario = req.body.fkUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    }

    if (escolha == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    }

    personagemModel.exibirFotoEFrase(escolha, idUsuario).then(function(resposta){
        
        res.status(200).send("Seu personagem foi cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar, 
    exibirFotoEFrase
}