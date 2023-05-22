/*calculadora de IMC*/

const form = document.getElementById('form');
const caixa = document.getElementById('cx-resultado');
const resultado = document.getElementById('resul-imc');
const alerta = document.getElementById('frase');




function calcular() {

    function renderizar() {
        caixa.style.display = "block";
        resultado.innerHTML = imc1; 
    
    }
    
    const peso = parseInt(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura));
    const imc1 = (imc*10000).toFixed(2);
    
    if(imc1 <= 18.5) {
        alerta.innerHTML = "Cuidado! </br>Voce está abaixo do peso!"
        renderizar();

    } else if(imc1 > 18.5 && imc1 <= 25) {
        alerta.innerHTML = "Voce está no peso ideal!"
        renderizar();

    } else if(imc1 > 25 && imc1 <= 30) {
        alerta.innerHTML = "Cuidado! </br>Voce está com sobrepeso!"
         renderizar();

    } else if(imc1 > 30  && imc1 <= 35) {
        alerta.innerHTML = "Cuidado! </br>Voce está com </br>obesidade moderada! ."
        renderizar();

    } else if(imc1 > 35 && imc1 <= 40) {
        alerta.innerHTML = "Cuidado! </br>Voce está com </br>obesidade severa!"
       renderizar();

    } else if(imc1 > 40) {
        alerta.innerHTML = "Cuidado! </br>Voce está com </br>obesidade mórbida!"
        renderizar();

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


    var sexo = document.getElementsByName('radsex');
    let idadeCalorias = parseInt(document.getElementById('idade-calorias').value);
    let alturaCalorias = parseFloat(document.getElementById('altura-calorias').value);
    let kgCalorias = parseInt(document.getElementById('kg-calorias').value);
    const resulCalorias = document.getElementById('result-calorias');
    const campo = document.querySelector('.caixaResultado');

    if (isNaN(idadeCalorias) || isNaN(alturaCalorias) || isNaN(kgCalorias)) {
        alert("Reveja os dados inseridos");
    }  else {
        const mascCalorias = (88.36 + (13.4 * kgCalorias) + (4.8 * alturaCalorias) - (5.7 * idadeCalorias));
        const femCalorias = (447.6 + (9.2 * kgCalorias) + (3.1 * alturaCalorias) - (4.3 * idadeCalorias));
        const mascCalorias1 = mascCalorias.toFixed(2);
        const femCalorias1 = femCalorias.toFixed(2);

        if(sexo[0].checked) {
            campo.style.display = "block"
            resulCalorias.innerHTML = `Voce gasta em média ${mascCalorias1}kcal por dia`
        } else {
            campo.style.display = "block"
            resulCalorias.innerHTML = `Voce gasta em média ${femCalorias1}kcal por dia`
        }
    }
}



/* calculando calorias diárias
Homens:
 88,36 + (13,4 x peso em kg) + (4,8 x altura em cm) - (5,7 x idade em anos)
  88.36 + (13.4 * kgCalorias) + (4.8 * alturaCalorias) - (5.7 * idadeCalorias)
Mulheres:
 447,6 + (9,2 x peso em kg) + (3,1 x altura em cm) - (4,3 x idade em anos) 
      447.6 + (9.2 * kgCalorias) + (3.1 * alturaCalorias) - (4.3 * idadeCalorias)

 */