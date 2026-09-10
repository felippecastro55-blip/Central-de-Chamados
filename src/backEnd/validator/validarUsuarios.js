'use strict';

/* Dados: nome, data de nascimento, cpf, e-mail */

export default function validarUsuario(usuario) {

    if (!usuario || usuario === null || Object.getPrototypeOf(usuario) !== Object.prototype) {
        console.log("Erro: entrada inválida!")
        return false;
    }

    const nome = validarNome(usuario.nome);
    const idade = validarIdade(usuario.dataNascimento);
    const cpf = validarCpf(usuario.cpf);
    const email = validarEmail(usuario.email);


    if (nome && idade && cpf && email) {
        console.log("Usuario válido");
        return true;
    } else {
        console.log("Usuario Inválido");
        return false;
    }


}
function validarNome(nome) {

    if (!nome || typeof nome !== "string" || nome.trim() === "") {
        console.log("Erro: nome inválido!")
        return false;
    }
}

function validarIdade(idade) {

    if (!idade || typeof idade !== "string" || idade.trim() === "") {
        console.log("Erro: data de nascimento inválido!")
        return false;
    }

    let dataNascimento = new Date(idade);
    let dataAtual = new Date();
    let maiorIdade = new Date(idade);

    dataNascimento.setUTCHours(0, 0, 0, 0);
    dataAtual.setUTCHours(0, 0, 0, 0);
    maiorIdade.setUTCHours(0, 0, 0, 0);

    maiorIdade.setFullYear(dataNascimento.getFullYear() + 18)

    console.log(maiorIdade)
    if (dataNascimento > dataAtual) {
        console.log("Erro: data não pode ser maior que a data atual.")
        return false;
    }

    if (maiorIdade >= dataAtual) {
        console.log("Menor de idade");
        return false;
    }

    return true;

}

function validarCpf(cpf) {

    if (!cpf || typeof cpf !== "string" || cpf.trim().length < 11) {
        console.log("Erro: CPF inválido! 1")
        return false;
    }

    let numerosIguais = true;
    let somaDigitos1 = 0;
    let somaDigitos2 = 0;

    for (let i = 0; i < 11; i++) {

        if (Number.isNaN(parseInt(cpf[i]))) {

            console.log("Erro: CPF inválido! 2")
            return false;
        }
        if ( i < 9 ) {
            somaDigitos1 += parseInt(cpf[i]) * (10 - i);
        }
        
        if ( i < 10) {
            somaDigitos2 += parseInt(cpf[i]) * (11 - i);
        }

        if (numerosIguais) {
            if (cpf[i] !== cpf[0]) {
                numerosIguais = false;
            }
        }

    }

    if (numerosIguais) {
        console.log("Erro: CPF inválido! 3")
        return false;
    }

    let resto1 = somaDigitos1 % 11;
    let digitoVerificador1 = resto1 < 2 ? 0 : 11 - resto1;

    if (parseInt(cpf[9]) !== digitoVerificador1) {
        console.log("Erro: CPF inválido! 4")
        return false;
    }

    let resto2 = somaDigitos2 % 11;
    let digitoVerificador2 = resto2 < 2 ? 0 : 11 - resto2;

    if (parseInt(cpf[10]) !== digitoVerificador2) {
        console.log("Erro: CPF inválido! 5")
        return false;
    }

    return true;

}

function validarEmail(email) {

    if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
        console.log("Erro: email inválido!");
        return false;
    }

    

}