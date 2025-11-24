CREATE DATABASE GigantesDeAco;

USE GigantesDeAco;

CREATE TABLE pessoa(
idPessoa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
conhecimento INT
);


CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
avaliacao INT,
tentativas INT
);



CREATE TABLE resultados(
fkPessoa INT,
fkQuiz INT,
idResultados INT,
qtdAcertos INT,
qtdErros INT,
CONSTRAINT pkComposta
	PRIMARY KEY (fkPessoa, fkQuiz, idResultados)
);