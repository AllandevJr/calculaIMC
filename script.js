function calcularImc() {
    // Obtém os valores de altura e peso do usuário
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('imc');

    // Verifica se os valores são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Determina a categoria do IMC
    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso ideal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        categoria = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
        categoria = "Obesidade Grau II";
    } else {
        categoria = "Obesidade Grau III";
    }

    // Exibe o resultado no elemento com ID "imc"
    resultado.innerText = `IMC: ${imc.toFixed(2)} - ${categoria}`;
}
