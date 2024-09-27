-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "codigoBarras" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "contato" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProdutoFornecedor" (
    "produtoId" INTEGER NOT NULL,
    "fornecedorId" INTEGER NOT NULL,

    PRIMARY KEY ("produtoId", "fornecedorId"),
    CONSTRAINT "ProdutoFornecedor_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProdutoFornecedor_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
