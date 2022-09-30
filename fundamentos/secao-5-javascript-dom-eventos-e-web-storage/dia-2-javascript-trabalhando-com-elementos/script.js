// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
let capturandoBody = document.getElementById("body");
let criandoH1 = document.createElement("h1");
criandoH1.innerHTML = "Exercício - JavaScript DOM";
capturandoBody.appendChild(criandoH1);

// Adicione a tag main com a classe main-content como filho da tag body;
let criandoMain = document.createElement("main");
criandoMain.className = "main-content";
capturandoBody.appendChild(criandoMain);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let capturandoMain = document.querySelector(".main-content");
let criandoSection = document.createElement("section");
criandoSection.className = "center-content";
capturandoMain.appendChild(criandoSection);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let capturandoSection = document.querySelector(".center-content");
let criandoP = document.createElement("p");
criandoP.innerHTML = "Texto de teste";
capturandoSection.appendChild(criandoP);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let criandoSectionLeft = document.createElement("section");
criandoSectionLeft.className = "left-content";
capturandoMain.appendChild(criandoSectionLeft);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let criandoSectionRight = document.createElement("section");
criandoSectionRight.className = "right-content";
capturandoMain.appendChild(criandoSectionRight);
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let capturandoSectionLeft = document.querySelector(".left-content");
let criandoImagem = document.createElement("img");
criandoImagem.src = "https://picsum.photos/200";
criandoImagem.className = "small-image";
capturandoSectionLeft.appendChild(criandoImagem);
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let capturandoSectionRgight = document.querySelector(".right-content");
function lista (array){
for (let index = 0; index < array.length; index += 1){
    let criandoLI = document.createElement("li");
    criandoLI.innerHTML = array[index];
    capturandoSectionRgight.appendChild(criandoLI);
  }
}
lista(['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']);

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
let criandoH3 = document.createElement("h3");
criandoH3.innerHTML = "show " + index;
capturandoMain.appendChild(criandoH3);
}

