var velocidade, acima, multa 

velocidade = Number(prompt(' Digite a velocidade : '));

document.write(' sua velocidade é ',velocidade);
if (velocidade>80){
    document.write(' E esta acima da velocidade permitida ');
    acima = velocidade - 80;
    multa = acima * 5;
}else{
    document.write(' e esta dentro da velocidade permitida ');
}