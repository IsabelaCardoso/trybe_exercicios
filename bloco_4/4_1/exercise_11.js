let salarioBruto = 6000;
let impostoINSS;
let impostoR;

if (salarioBruto <= 1556.94){
    impostoINSS = (salarioBruto * 0.08);
} else if (salarioBruto <= 2594.92){
    impostoINSS = (salarioBruto * 0.09);
} else if (salarioBruto <= 5189.82){
    impostoINSS = (salarioBruto * 0.11);
} else if (salarioBruto > 5189.82){
    impostoINSS = (570.88);
}

let salarioBase = salarioBruto - impostoINSS

if (salarioBase <= 1903.98){
    impostoR = 0;
} else if (salarioBase <= 2826.65){
    impostoR = (salarioBase * 0.075) - 142.80;    
} else if(salarioBase <= 3751.05){
    impostoR = (salarioBase * 0.15) - 354.80;
} else if(salarioBase <= 4664.68){
    impostoR = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68){
    impostoR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - impostoR;

console.log(`O salário líquido, com dedução de INSS e Imposto de Renda é de ${salarioLiquido} reais.`);

