const filme = {
    nome: "Era uma Vez em... Hollywood",
    diretor: "Quentin Tarantino",
    elenco: [ "Leonardo DiCaprio", "Brad Pitt", "Margot Robbie" ],
    lancamento: 2019,
    visto: true,
}

console.log(filme.nome)
console.log(filme.diretor)
console.log(filme.elenco)
console.log(filme["lancamento"])
console.log(filme["visto"])

filme.personagens = [ "Rick Dalton", "Cliff Booth", "Sharon Tate" ]

console.log(`O autor ${filme.elenco[0]} interpreta o personagem ${filme.personagens[0]}`)
console.log(`O autor ${filme.elenco[1]} interpreta o personagem ${filme.personagens[1]}`)
console.log(`A atriz ${filme.elenco[2]} interpreta a personagem ${filme.personagens[2]}`)

filme.elenco[0] = "Xuxa Menegel"

console.log(filme.elenco)
console.log(filme.personagens)