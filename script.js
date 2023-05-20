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

    // verifica se k e lambda são maiores que 0
    if (k < 0 || lambda < 0) {
      prompt = ('Erro! K e λ devem ser maiores que 0!');
      return;
    }

    let resultText = '';
    const probArray = [];

    // calcula a probabilidade para X menor ou igual a K
    for (let x = 0; x <= k; x++) {
      const prob = 100 * Math.pow(lambda, x) * Math.exp(-lambda) / factorial(x);
      probArray.push(prob);
      resultText += `P(X  = ${x}/ λ = ${lambda}) = ${prob.toFixed(2)}% <br>`;
    }

    // Calcula a soma dos valores do probArray
    const sum = probArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    resultText += `P(X  <= ${k}/ λ = ${lambda}) = ${sum.toFixed(2)} <br>`;

    // exibe o resultado na página HTML
    resultado.innerHTML = resultText;
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