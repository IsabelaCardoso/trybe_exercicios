// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 1000;

for (let contagem = 0;contagem < numbers.length;contagem += 1){
    if(numbers[contagem] < menorValor) {
        menorValor = numbers[contagem];
    } 
}
console.log(menorValor);