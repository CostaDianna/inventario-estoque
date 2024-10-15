
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    if (req.method === 'POST') {
      const { nome, descricao, preco, codigoBarras } = req.body;
      if (!nome || !descricao || !preco || !codigoBarras) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
      }
      const produto = await prisma.produto.create({ data: { nome, descricao, preco, codigoBarras } });
      return res.status(201).json(produto);
    }

    if (req.method === 'GET') {
      const produtos = await prisma.produto.findMany();
      return res.status(200).json(produtos);
    }

    if (req.method === 'DELETE') {
      if (!id) {
        return res.status(400).json({ message: 'ID do produto é obrigatório.' });
      }
      await prisma.produto.delete({ where: { id: Number(id) } });
      return res.status(200).json({ message: 'Produto excluído com sucesso.' });
    }

    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
}