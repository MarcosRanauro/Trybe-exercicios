function maiorNome(nomes){
    let maisLetras = nomes[0];
    for (let indice in nomes){
        if (maisLetras.length < nomes[indice].length){
            maisLetras = nomes[indice]
        }
    }
    return maisLetras;
}
console.log(maiorNome(['Marcos', 'Barbara', 'Soteropolitano']));