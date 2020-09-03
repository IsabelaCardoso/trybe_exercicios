function soma1ateN(param){
    let num = param;
    let soma = 0;
    for(let i = num; i > 0; i -= 1){
        soma += i;
    }
    return soma
}

console.log(soma1ateN(5));