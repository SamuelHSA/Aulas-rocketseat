let notas = 30
let nome = 'Samuel Henrique da Silva Andrade'
console.log(notas)


// menor que 30 reprovado
// entre 30 e 59 recuperação
// maior que 60 aprovado


const resultado = function() {
    console.log(nome, notas )
}
resultado()

if(notas < 30) {
    console.log('Reprovado')
}if(notas >= 30 && notas <= 59) {
    console.log('Você está de recuperação!')
}else if(notas >= 60) {
    console.log('Aprovado')
}
