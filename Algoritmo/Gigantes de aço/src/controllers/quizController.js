var quizModel = require("../models/quizModel");

function listar(req, res) {
  var idUsuario = req.params.idUsuario;
  quizModel
    .listar(idUsuario)
    .then((resultado) => res.status(200).json(resultado))
    .catch((erro) => res.status(500).json(erro.sqlMessage));
}

function cadastrar(req, res) {
  try {
    console.log(req);

    var fkPessoa =  req.body.fkPessoa;
    var fkQuiz =  req.body.fkQuiz;
    var avaliacao =  req.body.avaliacao;
    var qtdAcertos =  req.body.qtdAcertos;
    var qtdErros =  req.body.qtdErros;

    if (!fkPessoa) {
      res.status(400).send("Usuário ou teste não recebido!");
      return;
    }
    console.log("cadastrar - controller: " + req);

    quizModel.cadastrar(
      fkPessoa,
      fkQuiz,
      avaliacao,
      qtdAcertos,
      qtdErros
    );
    res.status(200).json({ mensagem: "Resultado salvo com sucesso!" });
  } catch (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  }
}

module.exports = {
  cadastrar,
  listar,
};