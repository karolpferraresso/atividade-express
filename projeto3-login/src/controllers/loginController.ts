import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Usuario } from '../models/usuarioModel';

export const realizarLogin = (req: Request, res: Response): void => {
    try {
        const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        res.status(400).json({
            erro: 'Os campos "usuario" e "senha" são obrigatórios.'
        });
        return;
    }

    // Leitura do arquivo JSON
    const caminhoArquivo = path.join(__dirname, '../data/usuarios.json');
    const dadosBrutos = fs.readFileSync(caminhoArquivo, 'utf-8');
    const listaUsuarios: Usuario[] = JSON.parse(dadosBrutos);

    // Verifica se o usuário e senha batem com algum registro
    const usuarioValido = listaUsuarios.find(
        (u) => u.usuario === usuario && u.senha === senha
    );

    if (!usuarioValido) {
        res.status(401).json({
            erro: 'Credenciais inválidas. Usuário ou senha incorretos.'
        });
        return;
    }

    res.status(200).json({
            mensagem: `Login realizado com sucesso! Bem-vindo, ${usuarioValido.usuario}.`
        });
    } catch (error) {
    res.status(500).json({ erro: 'Erro interno no servidor durante a autenticação.' });
    }
};