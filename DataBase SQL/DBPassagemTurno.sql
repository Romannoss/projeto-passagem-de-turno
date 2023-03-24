create database PassagemDeTurno

use PassagemDeTurno
GO
 
create table CadastrarPassagem(
Plataforma varchar(10),
Sistema varchar (10),
TipoDeOcorrencia varchar(10),
NumeroOcorrencia varchar(10),
Assunto varchar(50),
Equipe varchar(10),
Descricao varchar(50),
Data datetime)

create table Contato(
Nome varchar(50),
Telefone int,
Equipe varchar(50),
Turno varchar(10),
Usuario varchar(10)
)

