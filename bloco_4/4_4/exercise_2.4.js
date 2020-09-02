//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.

// 1) vai receber um array
// 2) acessar cada elemento do array pelo índice
// 3) contar o comprimento de cada elemento do array 
// 4) criar uma variável para comparar os comprimentos e retornar 

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