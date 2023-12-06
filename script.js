function calcularSomatorio() {
    // Obter o número digitado pelo usuário
    var numero = document.getElementById('numero').value;

    // Validar se o número é um inteiro positivo
    if (numero <= 0 || !Number.isInteger(Number(numero))) {
        alert('Por favor, digite um número inteiro positivo.');
        return;
    }

    // Calcular o somatório
    var somatorio = 0;
    for (var i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    // Exibir o resultado
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent =    somatorio;
}
