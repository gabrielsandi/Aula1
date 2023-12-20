function imprimirPessoa(pessoa) {
    const novaPessoa = {
        ...pessoa,
        comidasPreferidas: [ "Arroz", "Feijão", "Pizza" ],
        melhorAmigo: {
            nome: "Maria",
            idade: 30
        }
    }

    console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e ${novaPessoa.comidasPreferidas[2]}. Sua melhor amiga se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}

const pessoa = {
    nome: "José",
    idade: 33,
    generoMusicalFavorito: "MPB",
}

imprimirPessoa(pessoa)