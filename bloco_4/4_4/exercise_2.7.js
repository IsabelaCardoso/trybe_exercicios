// usar um indexOf para ver se existe as palavras ending em word.
// se sim, verificar a posição - ver se o índice da última letra está na última posição da string
// saber tamanho de word. para subtrair o comprimento de ending
// se sim, retornar true, se não, false.

function lastWords(word, ending){
    let result = word.indexOf(ending);
    if(result == true){
        console.log(result)
        console.log(true)
    } else {
        console.log(false)
    }
}

console.log(lastWords("Banana", "ana"))

//em andamento