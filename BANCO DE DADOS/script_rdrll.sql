CREATE DATABASE rdr2;
USE rdr2;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
email VARCHAR(80),
senha VARCHAR(8),
fkPersonagem INT, 
CONSTRAINT fkPersonagem FOREIGN KEY (fkPersonagem) REFERENCES personagem (idPersonagem)
);

CREATE TABLE personagem(
idPersonagem INT PRIMARY KEY auto_increment,
nomePersonagem VARCHAR(45)
);
