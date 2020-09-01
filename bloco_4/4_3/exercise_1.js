/* Criando algoritmo - baby steps


1) Criar variável n e colocar o valor
2) Criar estrutura de repetição para criar linha com numero de astericos = a n.
3) Criar estrutura de repetição para replicar as linhas anteriores, pelo número de vezes que n apresentar 
4) Imprimir os resultado dos códigos na tela

*/

let n = 4;

    for(let linhasVerticais = 1; linhasVerticais <= n; linhasVerticais += 1){
        let linhasHorizontais = "";
        for(let linha = 1; linha <= n; linha += 1){
            linhasHorizontais = linhasHorizontais + "*";
        }
        console.log(linhasHorizontais)
    }
