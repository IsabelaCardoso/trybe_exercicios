
function indiceMaiorValor(parametro){
    let maiorValor = 0;
    for(let i in parametro){
       if(parametro[maiorValor] <= parametro[i]){
        maiorValor = i;
       }
       
    } 
    return maiorValor
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

