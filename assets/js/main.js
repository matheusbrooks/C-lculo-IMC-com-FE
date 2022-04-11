// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso){
      setResultado('Peso inválido!', false);
        return;
  }
  if (!altura){
      setResultado('Altura inválida!', false);
        return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade 1º Grau', 'Obesidade 2º Grau', 'Obesidade 3º Grau'];

        if(imc >= 39.9 ) return nivel[5];
    
        if (imc >= 34.9) return nivel[4];

        if (imc >= 29.9) return nivel[3];
    
        if (imc >= 24.9) return nivel[2];
    
        if (imc >= 18.5) return nivel[1];
    
        if (imc < 18.5) return nivel[0];
    
}

function getImc (peso, altura){
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
   // const resultado = document.queryCommandValue('#resultado');
   var resultado = document.getElementById('resultado');
    resultado.innerHTML = msg;

    const p = criaP();

    if (isValid) {
        resultado.classList.remove('bad');
        resultado.classList.add('paragrafo-resultado');
    }else {
        resultado.classList.remove('paragrafo-resultado');
        resultado.classList.add('bad');
    }

    console.log(resultado);
    p.innerHTML = msg;
}