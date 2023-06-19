var SetaEsquerda = window.document.getElementById("seta-esquerda")
var SetaDireita = window.document.getElementById("seta-direita")
var Avaliacao1 = window.document.getElementById("avaliacao1")
var Avaliacao3 = window.document.getElementById("avaliacao3")

function RolarParaDireita() {
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
    Avaliacao1.style = "display:none"
    Avaliacao3.style = "display:flex"
}

function RolarParaEsquerda() {
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
    Avaliacao1.style = "display:flex"
    Avaliacao3.style = "display:none"
}