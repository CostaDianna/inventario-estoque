import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { nome, cnpj, endereco, contato } = req.body;
      if (!nome || !cnpj || !endereco || !contato) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
      }
      const fornecedor = await prisma.fornecedor.create({ data: { nome, cnpj, endereco, contato } });
      return res.status(201).json(fornecedor);
    }

    if (req.method === 'GET') {
      const fornecedores = await prisma.fornecedor.findMany();
      return res.status(200).json(fornecedores);
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ message: 'ID do fornecedor é obrigatório.' });
      }
      await prisma.fornecedor.delete({ where: { id: Number(id) } });
      return res.status(200).json({ message: 'Fornecedor excluído com sucesso.' });
    }

    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
}
