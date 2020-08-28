
let custoProduto = 50
let valorVenda = 100

if  (valorVenda > 0 && custoProduto > 0 ){
    let valorCustoTotal = (custoProduto * 0,2) + custoProduto;
    let lucro = valorVenda - valorCustoTotal;
    console.log(lucro * 1000);
} else {
    console.log("Erro! Valores informados são inválidos.")
}
