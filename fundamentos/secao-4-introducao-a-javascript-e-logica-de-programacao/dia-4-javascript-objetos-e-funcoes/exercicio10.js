function menorNumero(numeros){
    let indiceMenor = 0;
    for (let indice in numeros){
        if(numeros[indiceMenor] > numeros[indice]){
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}
console.log(menorNumero([1, 2, 3, 4, 0]));