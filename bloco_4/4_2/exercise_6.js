// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let itensImpares = 0;

for (let contagem = 0;contagem < numbers.length;contagem += 1){
    if(numbers[contagem] % 2 !== 0) {
        itensImpares += 1;
    } 
}

if (itensImpares === 0){
    console.log("nenhum valor ímpar encontrado.")
} 
else {
    console.log(itensImpares);
}