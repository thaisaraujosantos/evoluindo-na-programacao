function mediaSimples (num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3
    console.log(`A média simples é ${media}`)
}
mediaSimples(5, 7, 8)
mediaSimples(3.5, 7.6, 10)

function mediaPonderada (num1, num2, num3) {
    const media = num1 + (num2 * 2)+ (num3 * 3) / 6
    console.log(`A média ponderada é ${media}`)
}

mediaPonderada(5, 7, 8)
mediaPonderada(3.5, 7.6, 10)

