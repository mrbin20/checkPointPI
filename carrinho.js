const produtos = require('./produtos');
/*
2.Em seguida, um usuário deseja filtrar os produtos, com base em alguns
critérios. Selecione todos os produtos que tenham:
Valor entre 482 e 1600;
Qualidade superior a 60;
Status como disponível.
O resultado do filtro deve ser armazenado na variável carrinho.
*/
let carrinho = produtos.filter(item => {
    let valor = item.valorProd;
    let qualidade = item.qualidadeProd;
    let status = item.statusProd;

    let prodFiltrado = (valor >= 482 && valor <= 1600 && qualidade > 6 && status == true);
    return prodFiltrado;
});
console.log('Produtos Filtrados:');
console.table(carrinho);
/*
3.Por fim, é necessário exibir todos os itens presentes no carrinho, com seus
nomes e preços correspondentes, e no final um valor total, resultante da
somatória de todos os produtos.
*/
let somaCarrinho = carrinho.reduce((x, y) => { return x.valorProd + y.valorProd });
console.log('Valor Total do carrinho = R$', somaCarrinho);