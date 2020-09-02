//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.


function indiceMenorValor(parametro){
    let menorValor = 0;
    for(let i in parametro){
       if(parametro[menorValor] > parametro[i]){
        menorValor = i;
       }
       
    } 
    return menorValor
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));
