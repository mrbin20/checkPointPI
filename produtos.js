/*
1.Crie uma variável produtos, que contenha um array de objetos, com no
mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os
seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do
Produto e Status.
A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
A informação Status deve ser um Booleano, indicando se o produto está
disponível em estoque.
*/
var produtos = [
    {
        nomeProd: "skate A",
        valorProd: 490,
        qualidadeProd: 7,
        statusProd: true
    },
    {
        nomeProd: "skate B",
        valorProd: 450,
        qualidadeProd: 6,
        statusProd: false
    },
    {
        nomeProd: "skate C",
        valorProd: 500,
        qualidadeProd: 9,
        statusProd: true
    },
];
module.exports = produtos;