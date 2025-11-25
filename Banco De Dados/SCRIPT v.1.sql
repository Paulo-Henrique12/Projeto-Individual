CREATE DATABASE GigantesDeAco;

USE GigantesDeAco;

CREATE TABLE pessoa(
idPessoa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45) UNIQUE,
senha VARCHAR(45)
);


CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(100)
);



CREATE TABLE resultados(
fkPessoa INT,
fkQuiz INT,
idResultados INT,
avaliacao INT,
qtdAcertos INT,
qtdErros INT,
CONSTRAINT fkPessoaResultados
	FOREIGN KEY(fkPessoa)
		REFERENCES pessoa(idPessoa),
CONSTRAINT fkQuizResultados
	FOREIGN KEY (fkQuiz)
		REFERENCES quiz(idQuiz),
CONSTRAINT pkComposta
	PRIMARY KEY (fkPessoa, fkQuiz, idResultados)
);




