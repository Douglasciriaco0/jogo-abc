var anonasc, anoatual, idade  
anoatual = 2026;
anonasc = Number(prompt(' Digite  o ano de nascimento : '));

idade = anoatual - anonasc

if (idade>=18){
    document.write(" você deve se alistar ! ")
}else{
    
    document.write(' você ainda nao pode se alistar ')
}

