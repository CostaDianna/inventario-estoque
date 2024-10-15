import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req.method === 'POST') {
    const { produtoId, fornecedorId } = req.body;
    if (!produtoId || !fornecedorId) {
      return res.status(400).json({ message: 'Produto e Fornecedor são obrigatórios!' });
    }
      const associacao = await prisma.produtoFornecedor.create({
        data: { produtoId, fornecedorId }
      });
      return res.status(201).json(associacao);
    }
      return res.status(405).json({ message: 'Método não permitido' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao associar produto e fornecedor.' });
    }

  }

