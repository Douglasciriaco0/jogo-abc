var num1, num2, num3, soma

num1 = Number(prompt(' Digite o primeiro numero do lado do triângulo : '));

num2 = Number(prompt(' Digite o segundo numero do lado do triângulo  : '));

num3 = Number(prompt(' Digite o terceiro numero do lado do triângulo : '));

soma = num1+num2

if (soma<num3){
    document.write(' Esses numeros formam um triangulo ! ')
}else{
    document.write(' Esses numeros não formam um triangulo')
}
