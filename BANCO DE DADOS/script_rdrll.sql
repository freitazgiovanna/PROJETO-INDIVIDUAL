CREATE DATABASE rdr2;
USE rdr2;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
email VARCHAR(80),
senha VARCHAR(8)
);

CREATE TABLE personagem(
idPersonagem INT PRIMARY KEY auto_increment,
nomePersonagem VARCHAR(45),
fkUsuario INT, 
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);
 SELECT * FROM usuario;
 SELECT * FROM personagem;
 
SELECT COUNT(idPersonagem) AS quantidade, nomePersonagem FROM personagem GROUP BY nomePersonagem;
