var adicionar = document.querySelector(".adicionar-aluno")
adicionar.addEventListener("click", function(event) {
    event.preventDefault()
    var form = document.querySelector(".formulario")

    var nome = form.nome.value
    var  primeiro = Number(form.primeiro.value)
    var segundo = Number(form.segundo.value)
    var terceiro = Number(form.terceiro.value)
    

    var alunoTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var primeiroTd = document.createElement("td")
    var segundoTd = document.createElement("td")
    var terceiroTd = document.createElement("td")
    var somaTd = document.createElement("td")
    var situaçãoTd = document.createElement("td")

    nomeTd.textContent = nome
    primeiroTd.textContent = primeiro
    segundoTd.textContent = segundo
    terceiroTd.textContent = terceiro
    somaTd.textContent = somaNota(primeiro, segundo, terceiro)
    situaçãoTd.textContent = aprovação()

    alunoTr.appendChild(nomeTd)
    alunoTr.appendChild(primeiroTd)
    alunoTr.appendChild(segundoTd)
    alunoTr.appendChild(terceiroTd)
    alunoTr.appendChild(somaTd)
    alunoTr.appendChild(situaçãoTd)

    var tabela = document.querySelector(".tabela-alunos")

    tabela.appendChild(alunoTr)
})