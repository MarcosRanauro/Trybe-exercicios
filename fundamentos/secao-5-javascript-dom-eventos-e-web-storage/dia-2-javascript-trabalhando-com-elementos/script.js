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
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.