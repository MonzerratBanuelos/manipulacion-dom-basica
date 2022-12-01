/*  ///////////////////ESCRIBIENDO HTML DESDE JAVASCRIPT

const h1 =document.querySelector("h1");
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1)
console.log(p)
console.log(parrafito)
console.log(pid)
console.log(input)
console.log({
h1,
p,
parrafito,
pid,
input,
})

h1.innerText='Hello motto'

console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo')
//console.log(h1.getAttribute('class'))

h1.classList.add('rosa')
console.log(h1.classList)
h1.classList.remove('verde')
console.log(h1.classList)

input.value = 'hellooooo'
console.log(input.value)

const h2 =document.createElement('h2')
h2.innerText = 'asdfghj'
document.body.appendChild(h2)
*/

/////////// EVENTOS EN JAVASCRIPT: INTERACTUANDO CON USUARIOS


const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const form = document.getElementById('form')

function btnOnClick (e){
    e.preventDefault()
    const sumaInput = parseInt(input1.value) + parseInt(input2.value)
    const resultado = document.getElementById('result')
    resultado.innerText = sumaInput
    document.body.append(resultado)
    
}
form.addEventListener('submit', btnOnClick)