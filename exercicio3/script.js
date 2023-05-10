// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))

const somar = (num1, num2) => {
    return num1+num2
}

const subtrair = (num1, num2) => {
    return num1-num2
}

const multiplicar = (num1, num2) => {
    return num1*num2
}

const dividir = (num1, num2) => {
    return num1/num2
}

const soma = somar(numero1, numero2)
const subtracao = subtrair(numero1, numero2)
const multiplicacao = multiplicar(numero1, numero2)
const divisao = dividir(numero1, numero2)

console.log(soma, subtracao, multiplicacao, divisao)


