let frase = prompt("Escreva uma frase")

let fraseMaiuscula = frase.toUpperCase()
let novaFrase = frase.replaceAll("o","i")

console.log(frase, fraseMaiuscula, novaFrase);