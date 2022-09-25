let numbers = [];
let resultado = 0;

for (let index = 1; index <= 25; index += 1){
    numbers.push(index);
}
console.log(numbers);

for (let index2 = 0; index2 < numbers.length; index2 += 1){
    resultado = numbers[index2] / 2;
    console.log("Resultado da divisão do " + numbers[index2] + "° número = " + resultado);
    
}

