const prompt = require("prompt-sync")();

let saldo = Number(prompt("quanto de saldo tem na conta?"));
let valor = Number(prompt("qual o valor do pix?"));

if (saldo >= valor) {
    saldo = saldo - valor
    console.log("Pix enviado!, saldo: ", saldo.toFixed(2))
} else {
    console.log("Pix bloqueado!, Motivo: Saldo Inauficiente")
}
