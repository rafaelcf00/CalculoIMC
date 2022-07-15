const form = document.querySelector('.formulario');
const resultadoimc = document.querySelector('#resultadoimc');
const niveis = ['(Abaixo do Peso)', '(Peso normal)', '(Sobrepeso)', '(Obesidade grau 1)', '(Obesidade grau 2)', '(Obesidade grau 3)'];

function recebeEvento(evento) {

    evento.preventDefault(); // Para nao recarregar a pagina

    let peso = form.querySelector('#peso');
    let altura = form.querySelector('#altura');

    const resultCalculo = Number(calculoImc(peso.value, altura.value));

    removerClasse();

    isValid(resultCalculo.toFixed(2));
    isInvalid();

    if (isNum(peso.value)) {

        peso = Number(peso.value);

    }

    if (isNum(altura.value)) {

        altura = Number(altura.value);

    }


}

function calculoImc(peso, altura) {

    const result = peso / (altura * altura);

    return result;

}

function isValid(resultCalculo) {

    if (resultCalculo < 18.5) {

        let resultImc = resultadoimc.innerHTML = (`<p> Seu IMC é ${resultCalculo} ${niveis[0]} </p>`);
        resultadoimc.classList.add("valid");

    } else if (resultCalculo >= 18.5 && resultCalculo <= 24.9) {

        resultImc = resultadoimc.innerHTML = (`<p> Seu IMC é ${resultCalculo} ${niveis[1]} </p>`);
        resultadoimc.classList.add("valid");

    } else if (resultCalculo >= 25 && resultCalculo <= 29.9) {

        resultImc = resultadoimc.innerHTML = (`<p> Seu IMC é ${resultCalculo} ${niveis[2]} </p>`);
        resultadoimc.classList.add("valid");

    } else if (resultCalculo >= 30 && resultCalculo <= 34.9) {

        resultImc = resultadoimc.innerHTML = (`<p> Seu IMC é ${resultCalculo} ${niveis[3]} </p>`);
        resultadoimc.classList.add("valid");

    } else if (resultCalculo >= 35 && resultCalculo <= 39.9) {

        resultImc = resultadoimc.innerHTML = (`<p> Seu IMC é ${resultCalculo} ${niveis[4]} </p>`);
        resultadoimc.classList.add("valid");

    } else if (resultCalculo > 40) {

        resultImc = resultadoimc.innerHTML = (`<p> Seu IMC é ${resultCalculo} ${niveis[5]} </p>`);
        resultadoimc.classList.add("valid");
    }

}


function isInvalid() {

    if (!isNum(peso.value) || !peso.value || peso.value <= 0) {
        resultadoimc.innerHTML = (`<p> Peso Inválido </p>`);
        resultadoimc.classList.add("invalid");

    }

    if (!isNum(altura.value) || !altura.value || altura.value <= 0) {
        resultadoimc.innerHTML = (`<p> Altura Inválida </p>`);
        resultadoimc.classList.add("invalid");

    }

    if (!isNum(altura.value) && !isNum(peso.value) || !altura.value && !peso.value || !peso.value && !isNum(altura.value) || !altura.value && !isNum(peso.value) || peso.value <= 0 && altura.value <= 0) {

        resultadoimc.innerHTML = (`<p> Peso e Altura Inválidos </p>`);
        resultadoimc.classList.add("invalid");

    }
}

function removerClasse() {

    if (resultadoimc.classList.contains('valid')) {

        resultadoimc.classList.remove('valid');

    } else if (resultadoimc.classList.contains('invalid')) {

        resultadoimc.classList.remove('invalid');

    }
}

function isNum(val) {

    return !isNaN(val)
}

form.addEventListener('submit', recebeEvento); // para parar o envio do formulario
