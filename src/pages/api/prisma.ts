
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
  } else if (req.method === 'POST') {
    const { nome, descricao, preco, codigoBarras } = req.body;
    const produto = await prisma.produto.create({
      data: { nome, descricao, preco, codigoBarras },
    });
    res.status(201).json(produto);
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
