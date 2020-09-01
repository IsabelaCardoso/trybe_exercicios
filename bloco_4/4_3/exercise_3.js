let n = 5;
let simbolo = "*";
let valorLinha = "";
let valorN = n;

 
for(i = 1; i <= n; i += 1){
    for(j = 1; j <= n; j += 1){
        if (j < valorN){
            valorLinha = valorLinha + " ";
        } else {
            valorLinha = valorLinha + simbolo;
        }
    }
    console.log(valorLinha);
    valorLinha = "";
    valorN -= 1;
}