'use strict';

export default class Usuario {
    constructor(nome, dataNascimento, cpf, email) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
    }
}