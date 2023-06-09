var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.post("/exibirFotoEFrase", function (req, res) {
    // função a ser chamada quando acessar /personagem/cadastrar
    personagemController.exibirFotoEFrase(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /personagem/listar
    personagemController.listar(req, res);
});

module.exports = router;