/*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

// function mudaTextoP (elementoP) {
//     let tagP = document.getElementsByClassName(elementoP)[0];
//     tagP.innerText = "Ola <br>asjdçkasjd çaksjdçaksjd asçdkjdçaksjçdk asjdçaksjdçk asdkjasçkdjç asçdkjaçskdj"; 
// }
// mudaTextoP("center-content");

function corTrybe (elementoC) {
    let corT = document.getElementsByClassName(elementoC)[0];
    corT.style.backgroundColor = "rgb(76,164,109)";
}
corTrybe("main-content");

function mudaCorRed (elementoR) {
    let corR = document.getElementsByClassName(elementoR)[0];
    corR.style.backgroundColor = "white";
}
mudaCorRed("center-content");

function mudaTextoH1 (elementoH1) {
    let textoH1 = document.getElementsByTagName(elementoH1)[0];
    textoH1.innerText = "Exercicio - Javascript";
}
mudaTextoH1("h1");

function caixaAlta (elementoP) {
    let pMaior = document.getElementsByTagName(elementoP)[0];
    pMaior.innerText = pMaior.innerText.toUpperCase();
}
caixaAlta("p");

// function exibirTag () {
//     let exibirTagP = document.getElementsByTagName("p");
//     for (let index = 0; index < exibirTagP.length; index += 1) {
//         console.log(exibirTagP[index].innerHTML);
//     }
// }
// exibirTag();

// function showParagraphs(tagPPP) {
//     let paragraphs = document.getElementsByTagName(tagPPP);
//     for (let index = 0; index < paragraphs.length; index += 1) {
//       console.log(paragraphs[index]);
//     }
//   }
//   showParagraphs("p");