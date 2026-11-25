import { Request, Response } from 'express';

export const calcularSoma = (req: Request, res: Response): void => {
    try {
        const { num1, num2, num3 } = req.body;
        const problemas: string[] = [];

    if (num1 === undefined || typeof num1 !== 'number' || isNaN(num1)) {
        problemas.push('O campo "num1" é obrigatório e deve ser um valor numérico válido.');
    }
    if (num2 === undefined || typeof num2 !== 'number' || isNaN(num2)) {
        problemas.push('O campo "num2" é obrigatório e deve ser um valor numérico válido.');
    }
    if (num3 === undefined || typeof num3 !== 'number' || isNaN(num3)) {
        problemas.push('O campo "num3" é obrigatório e deve ser um valor numérico válido.');
    }

    if (problemas.length > 0) {
        res.status(400).json({
            erro: 'Falha na validação dos dados enviados.',
            detalhes: problemas
        });
        return;
    }

    const resultado = num1 + num2 + num3;

    res.status(200).json({
            numerosRecebidos: [num1, num2, num3],
            soma: resultado
        });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao calcular a soma.' });
    }
};