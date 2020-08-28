let peçaXadrez = 'Peao';
let peçaXadrezLowerCase = peçaXadrez.toLowerCase();

switch(peçaXadrezLowerCase){
    case 'rainha':
        console.log("Movimentos na horizontal, vertical e diagonal.");
    break;

    case 'bispo':
        console.log("Movimentos em diagonal.");
    break;

    case 'rei':
        console.log("Movimento de apenas uma casa por vez, em qualquer direção.");
    break;

    case 'cavalo':
        console.log("Movimento em L: duas casas para a horizontal e mais duas na vertical.");
    break;

    case 'torre':
        console.log("Movimentos para a vertical ou horizontal.");
    break;

    case 'peão':
        console.log("Movimento de uma casa para frente.");
    break;

    case 'peao':
        console.log("Movimento de uma casa para frente.");
    break;
}