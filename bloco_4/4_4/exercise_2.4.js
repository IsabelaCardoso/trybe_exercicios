function maiorNome(param){
    let maiorNome = "a"
    let elementos;
    for(let i = 0; i < param.length; i += 1){
        elementos = param[i].split().join()
        if(maiorNome.length < elementos.length){
            maiorNome = elementos
        }
    }
    return maiorNome
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));