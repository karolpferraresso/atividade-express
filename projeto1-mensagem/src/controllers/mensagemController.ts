import { Request, Response } from 'express';
import { DadosMensagem } from '../models/mensagemModel';

export const criarMensagem = (req: Request, res: Response): void => {
    try {
        const { nome, idade, timeFavorito }: DadosMensagem = req.body;

    if (!nome || idade === undefined || !timeFavorito) {
        res.status(400).json({
            erro: 'Todos os campos (nome, idade e timeFavorito) são obrigatórios.'
        });
        return;
    }

    if (typeof nome !== 'string' || typeof timeFavorito !== 'string' || typeof idade !== 'number') {
        res.status(400).json({
            erro: 'Tipos inválidos: nome e timeFavorito devem ser texto, e idade deve ser número.'
        });
        return;
    }

    const frase = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${timeFavorito}!`;

        res.status(200).json({ mensagem: frase });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno no servidor ao processar a mensagem.' });
    }
};