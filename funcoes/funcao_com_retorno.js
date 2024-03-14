function mediaPonderada (num1, num2, num3) {
    const media = (num1 + (num2 * 2)+ (num3 * 3)) / 6
    return media
}

function mediaSimples(nota1, nota2) {
    return (nota1 + nota2) / 2
}

const media1 = mediaPonderada(7, 8, 9)
const media2 = mediaPonderada(5.8, 8.3, 9.9)
const mediaFinal = mediaSimples(media1, media2)
const mediaFinalInteira = Math.ceil(mediaFinal)

console.log(media1, media2)
console.log(`A média final do aluno é ${mediaFinalInteira}`)


