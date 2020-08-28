// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array1a25 = [];

for (let contagem = 0;contagem < numbers.length;contagem += 1){
    if(numbers[contagem] <= 25) {
        array1a25.push(numbers[contagem] / 2);
    } 
}

console.log(array1a25);