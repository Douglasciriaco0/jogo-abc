var nome, sexo, descontoM, descontoF, compra, compradesc;
nome = prompt("Digite o seu nome :");
sexo = prompt("Qual seu sexo (F) femenino (M) masculino : ")
compra = prompt("Qual o valor da sua compra :");

descontoF = 13%-compra
descontoM = 5%
if (sexo=descontoM){
    document.write(' você tem 5% de desconto ');

}else{
    (sexo=descontoF)
    document.write(' você tem 13% de desconto ');
}
