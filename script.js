
const input = document.querySelector(".input")

const numbers = document.querySelector(".numbers")


input.addEventListener("input", (keydown) => {
    
    numbers.innerHTML = input.value.length
    
})
