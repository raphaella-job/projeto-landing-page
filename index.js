var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    leonardo.style ="display:none"
    samanta.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 75px"
}

function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    samanta.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}