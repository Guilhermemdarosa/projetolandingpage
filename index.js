var setaesquerda = window.document.getElementById("setaesquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("setadireita") 

function rolarparadireita() {
    leonardo.style ="display:none"
    bruna.style = "display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex; margin-top:55px;" 
}

function rolarparaesquerda(){
    bruna.style ="display:none"
    leonardo.style ="display:flex"
    setadireita.style ="display:flex; margin-top:55px"
    setaesquerda.style ="display:none"
}
