const somar = (num1, num2) => {
    console.log(num1+num2)
}

somar(2,79)

const verificarMaior = (num1, num2) => {
    console.log(num1 >= num2)
}
verificarMaior(23, 26)

const verificarPar = (num) => {
    console.log(num %2===0)
}

verificarPar(23)

// Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

const salarioLiquido = (salario) => {
    return salario*0.9
}

console.log(salarioLiquido(4223));