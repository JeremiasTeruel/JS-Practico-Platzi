const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const p = document.querySelector('#resultado')


function btnOnClick(event) {
    event.preventDefault()
    const sumaInput = input1.value + input2.value;
    p.innerText = "Resultado: " + sumaInput
}


form.addEventListener('submit', btnOnClick)