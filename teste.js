const valorbase = 5;
const valorporminuto = 0.5;
const valorporkm = 2;

let km = 8;
let minutos = 20;

console.log(typeof km);

//typeof indica o tipo de variável
console.log(typeof km);

let total = valorbase + km * valorporkm + minutos * valorporminuto;
console.log("o valor da corrida é: R$" + total.toFixed(2));


