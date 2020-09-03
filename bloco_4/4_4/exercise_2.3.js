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
