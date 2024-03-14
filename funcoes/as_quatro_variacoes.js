// #1 - Função SEM parâmetros e SEM retorno
function exibirBomDia() {
    console.log('Bom dia')
}

exibirBomDia()

// #2 - Função COM parâmetros e SEM retorno
function exibirBomDiaPara(nome, msg) {
    console.log(`Bom dia ${nome}! ${msg}`)
}

exibirBomDiaPara('Thaís', 'Como vc está?')
exibirBomDiaPara('Carlos', 'Vamos para a praia?')

// #3 - Função SEM parâmetros e COM retorno
function numeroEntre0e10() {
    const num = parseInt(Math.random() * 10)
    return num
}

console.log(numeroEntre0e10())

// #4 - Função COM parâmetros e COM retorno
function somar(n1, n2) {
    return n1 + n2
}

const result = somar(30, 1745)
console.log(result)
console.log(somar(5,4))

