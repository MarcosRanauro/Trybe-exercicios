let pecaXadrez = 'foca';

switch (pecaXadrez){
    case 'Peão': console.log("Pode se mover para frente e na diagonal, não pode se mover para traz.");
    break;
    case 'Bispo': console.log("Pode se mover somente na diagonal");
    break;
    case 'Cavalo': console.log("Pode se mover em L");
    break;
    case 'Torre': console.log("Pode se mover em forma de cruz(+)");
    break;
    case 'Dama': console.log("Pode se mover na diagonal e na forma de cruz(+)");
    break;
    case 'Rei': console.log("Pode se mover em qualquer direção");
    break;
    default: console.log("Peça inexistente");   

}