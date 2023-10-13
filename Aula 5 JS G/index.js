//Frase concatenada e template:

let nome = prompt("Digite seu nome")
let cor = prompt ("Digite sua cor favorita")

let fraseConcatenada = "A cor favorita de " + nome + " é " + cor 
let fraseTemplate = `A cor favorita de ${nome} é ${cor}`

console.log(fraseConcatenada);
console.log(fraseTemplate);