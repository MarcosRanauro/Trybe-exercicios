let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersImpar = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 === 1){
        numbersImpar += 1;
    }
}
if (numbersImpar > 0){
    console.log("Foram encontrados " + numbersImpar + " numeros impares no array!");
}else {
    console.log("Nenhum numero impar encontrado")
}
