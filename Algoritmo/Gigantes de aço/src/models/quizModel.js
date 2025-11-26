var database = require("../database/config")

function listar(idUsuario) {
  var instrucao = `
        SELECT idResultado, qtdAcertos, qtdErros, avaliacao
        FROM resultados
        WHERE fkPessoa= ${idUsuario}
        ORDER BY idResultado DESC
        LIMIT 1;
    `;
  console.log(instrucao);
  return database.executar(instrucao);
}


function cadastrar(
  fkPessoa,
  fkQuiz,
  avaliacao,
  qtdAcertos,
  qtdErros
) {
  var instrucao = `
        INSERT INTO resultados
        (fkPessoa, fkQuiz, avaliacao, qtdAcertos, qtdErros)
        VALUES (${fkPessoa}, ${fkQuiz}, ${avaliacao}, ${qtdAcertos}, ${qtdErros});`
    ;

  console.log("Executando SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrar,
  listar,
};