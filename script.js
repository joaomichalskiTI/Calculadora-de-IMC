/*calculadora de IMC*/

const form = document.getElementById('form');
const caixa = document.getElementById('cx-resultado');
const resultado = document.getElementById('resul-imc');
const alerta = document.getElementById('frase');


function calcular() {
    const peso = parseInt(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura));
    const imc1 = (imc*10000).toFixed(2);
    
    if(imc1 <= 18.5) {
        caixa.style.display = "block";
        resultado.innerHTML = imc1
        alerta.innerHTML = "Cuidado! </br>Voce está abaixo do peso!"

    } else if(imc1 > 18.5 && imc1 <= 25) {
        caixa.style.display = "block";
        resultado.innerHTML = imc1
        alerta.innerHTML = "Voce está no peso ideal!"

    } else if(imc1 > 25 && imc1 <= 30) {
        caixa.style.display = "block";
        resultado.innerHTML = imc1
        alerta.innerHTML = "Cuidado! </br>Voce está com sobrepeso!"

    } else if(imc1 > 30  && imc1 <= 35) {
        caixa.style.display = "block";
        resultado.innerHTML = imc1
        alerta.innerHTML = "Cuidado! </br>Voce está com </br>obesidade moderada! ."

    } else if(imc1 > 35 && imc1 <= 40) {
        caixa.style.display = "block";
        resultado.innerHTML = imc1
        alerta.innerHTML = "Cuidado! </br>Voce está com </br>obesidade severa!"

    } else if(imc1 > 40) {
        caixa.style.display = "block";
        resultado.innerHTML = imc1
        alerta.innerHTML = "Cuidado! </br>Voce está com </br>obesidade mórbida!"
    }
}   

/*botões para mudar de uma calculadora para outra*/

var aparecerImc = document.querySelector(".imcCalculo");
var aparecerCal = document.querySelector(".calorias-calculo");
let butonIMC = document.querySelector(".clc-imc");
let butonCalorias = document.querySelector(".clc-cal");


function imc() {
    aparecerImc.style.display = "block";
    aparecerCal.style.display = "none";
    butonIMC.style.color = "rgb(23, 207, 23)";
    butonCalorias.style.color = "white";
}

function calorias() {
    aparecerImc.style.display = "none";
    aparecerCal.style.display = "block";
    butonIMC.style.color = "white";
    butonCalorias.style.color = "rgb(23, 207, 23)";
}

/*função para calcular as calorias*/ 

function calculate() {
    const result = document.getElementById('result');
    const campo = document.querySelector('.caixaResultado');
}