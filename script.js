const numeroTela = document.querySelector(".number")
const addNum = document.querySelector(".btn.add")
const removeNum = document.querySelector(".btn.remove")

let numeroAdicionado = 0

addNum.addEventListener("click",()=>{
    numeroAdicionado++
    numeroTela.innerHTML = numeroAdicionado
})
removeNum.addEventListener("click",()=>{
    
    if(numeroTela.textContent == 0){
        return
    }

    numeroAdicionado--
    numeroTela.innerHTML = numeroAdicionado
})