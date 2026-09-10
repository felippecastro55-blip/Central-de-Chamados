'use strict';
import Usuario from "../models/usuario.js";
import validarUsuario from "../validator/validarUsuarios.js"


export default function cadastroUsuario(usuario) {

    if (!validarUsuario(usuario)) {
        console.log("Erro: usuario inválido!");
        return false;
    }

    const usuario = new Usuario(usuario.nome, usuario.dataNascimento, usuario.cpf, usuario.email)
    console.log("Usuario cadastrado no banco de dados")


}

