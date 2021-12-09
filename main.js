/// Soma dos valores de um determinado array

// Exemplo de programa Imperativo

function somaImperativa(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
        soma = soma + arr[i]
    }

    return soma;
}

//Exemplo de programa Declarativo

const somaDeclarativa = arr => arr.reduce((anterior, atual) => anterior + atual, 0)

//testando

let arr1 = [1,3,5,8,13];
let arr2 = [1,3,5,8,13];

console.log(` Soma Imperativa: ${somaImperativa(arr1)}`)
console.log(` Soma Declarativa: ${somaDeclarativa(arr2)}`)