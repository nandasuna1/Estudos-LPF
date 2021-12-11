
// mutavel
const bolaMutable = {
    cor: "vermelha",
    raio: 5
}

bolaMutable.raio = 3

//imutavel
const bolaImutable = {
    cor:"vermelha",
    raio : 5
}

const bolaAzul = {...bolaImutable, cor: "azul"}

console.log(bolaImutable)
console.log(bolaAzul)
console.log(bolaMutable)