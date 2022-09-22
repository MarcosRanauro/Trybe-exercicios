const num1 = 60;
const num2 = 60;
const num3 = 60;

if(num1 < 0 || num2 < 0 || num3 < 0){
    console.log("erro");
}else if(num1 + num2 + num3 === 180){
    console.log(true);
}else {
    console.log(false);
}
