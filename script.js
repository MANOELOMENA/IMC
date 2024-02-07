function Soma(){
    const valor1 = document.getElementById("valor1")
    const valor2 = document.getElementById("valor2")

    const num1 = Number(valor1.value)
    const num2 = Number(valor2.value)

    const soma = num1 * num1
    const resultado = num2 / soma

    let imc = ""
    if (resultado <= 16.9) {
       imc = "Muito abaixo do peso";
      } else if (resultado >= 17 && resultado <= 18.4) {
        imc = "abaixo do peso";
      } else if (resultado >= 18.5 && resultado <= 24.9) {
        imc = "peso normal";
      } else if (resultado >= 25 && resultado <= 29.9) {
        imc = "acima do peso";
      } else if (resultado >= 30 && resultado <= 34.9) {
        imc = "Obesidade grau I";
      } else if (resultado >= 35 && resultado <= 40) {
        imc = "Obesidade grau II";
      } else if (resultado > 40) {
        imc = "Obesidade grau III";
      }
      document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(1)}, voce é: ${imc}`
    }
