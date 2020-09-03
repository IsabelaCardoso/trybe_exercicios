function maisRepetido(param){
    let numRepeticao = 0;
    let numMaisRepetido;
    let numRepeticaoTotal = 0;
    for(let i in param){
        for(let j in param){
            if(i === j){
                numRepeticao += 1;
            }    
        }
        if(numRepeticaoTotal < numRepeticao){
            numRepeticaoTotal = numRepeticao;
            numMaisRepetido = i; 
            numRepeticao = 0;   
        }
        
    }
        
    return numMaisRepetido
}

console.log(maisRepetido([2, 3, 2, 5, 3, 2]));