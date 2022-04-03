var alunos = document.querySelectorAll(".aluno")

for(i = 0; i < alunos.length; i++) {
    var aluno = alunos[i]

    var primeiro = parseInt(aluno.querySelector(".primeiro").textContent)
    var segundo = parseInt(aluno.querySelector(".segundo").textContent)
    var terceiro = parseInt(aluno.querySelector(".terceiro").textContent)

    var soma = somaNota(primeiro, segundo, terceiro)

    aluno.querySelector(".soma").textContent = soma

    aprovação()
    

   





function somaNota(nota1, nota2 , nota3) {
       
    var nota = nota1 + nota2 + nota3

    return nota
 }

 function aprovação() {

    var situação = aluno.querySelector(".situação")    
    
    if(soma >= 60) {

        situação.innerHTML = "Aprovado"
        aluno.classList.add ("passou")

    } else if(soma >= 40) {

        situação.innerHTML = "Recuperação"
        aluno.classList.add ("recu")

    } else {

        situação.innerHTML = "Reprovado"
        aluno.classList.add ("reprovou")
        

        return situação
    }}}




