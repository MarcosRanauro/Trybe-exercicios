function maiorNumero(numeros){
    let indiceMaior = 0;
    for (let indice in numeros){
        if(numeros[indiceMaior] < numeros[indice]){
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}
console.log(maiorNumero([1, 2, 3, 4]));