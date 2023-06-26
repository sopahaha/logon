function tempoNaTela() {
    let dataEL = document.querySelector(".hora");

    const dataAtual = new Date();

    // Formatação da hora
    const horas =  dataAtual.getHours().toString().padStart(2, '0');
    const minutos =  dataAtual.getMinutes().toString().padStart(2, '0');

    dataEL.innerHTML = horas + ":" + minutos;
}


function mudartela(){
    const erro = document.querySelector(".erro")
    const login = document.querySelector(".login")

    erro.classList.toggle("hide")
    login.classList.toggle("hide")

}


window.addEventListener("keypress",(e)=>{
    if(e.code == "Enter"){
        mudartela()
    }
})

tempoNaTela()

setInterval(tempoNaTela, 1000)