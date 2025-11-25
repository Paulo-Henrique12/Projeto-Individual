var database = require("../database/config")

function cadastrar(
  fkPessoa,
  fkQuiz,
  avaliacao,
  qtdAcertos,
  qtdErros
) {
  var instrucao = `
        INSERT INTO resultados
        (fkQuiz, fkPessoa, avaliacao, qtdAcertos, qtdErros)
        VALUES (${fkQuiz}, ${fkPessoa}, ${avaliacao}, ${qtdAcertos}, ${qtdErros});`
    ;

  console.log("Executando SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrar,
};