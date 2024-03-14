function calcularMedia (nota1, nota2, nota3) {
    // encontrar a menor nota
    let menorNota = Math.min(nota1, nota2, nota3)
    
    // calcular a media das duas maiores notas
    let media = (nota1 + nota2 + nota3 - menorNota) / 2

    return media
}

function statusDoAluno(media) {
    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 4) {
        return 'Recuperacao'
    } else {
        return 'Reprovado'
    }
}

const resultadoMedia = calcularMedia(7.9, 8.4, 1.5)
const mediaFinal = statusDoAluno(resultadoMedia)
console.log(`A media do aluno é ${resultadoMedia} e o resultado final ficou ${mediaFinal}.`)
