window.addEventListener('load', function() {

// obtém o elemento HTML para exibir o valor da probabilidade
const resultado = document.querySelector('p#probabilidade');

// define o evento de submissão do formulário
const form = document.getElementById('form-poisson');
form.addEventListener('submit', (event) => {
  // impede o envio padrão do formulário
  event.preventDefault();

  // obtém os valores de k e lambda
  const k = parseInt(document.getElementById('k').value);
  const lambda = parseFloat(document.getElementById('lambda').value);

  // calcula a probabilidade de Poisson
  const prob = 100*Math.pow(lambda, k) * Math.exp(-lambda) / factorial(k);

  // exibe o resultado na página HTML
  resultado.textContent = `P(X = ${k}/ λ = ${lambda}) = ${prob.toFixed(2)}%`;
});

// define uma função para calcular o fatorial
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

});