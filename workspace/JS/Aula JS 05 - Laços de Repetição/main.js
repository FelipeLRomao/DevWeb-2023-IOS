var numero = 10;

if(numero % 2 == 0){
    console.log("Número Par");
}else{
    console.log("Número Ímpar");
}

//validação encadeada
//segunda validação numero maior que 10
//o número é par e maior que 10
// o número é par porem é menor que 10
var imparPar2 = 10
if(imparPar2 % 2 == 1){
    console.log("é ímpar");
}else{
    if(imparPar2 > 10){
        console.log('o número é par e é maior que 10')
    }else{
        console.log("o número é par porém é menor que 10")
    }
}

//operador Ternário

imparPar3 = 7;

imparPar3 % 2 == 1 ? console.log("é Ímpar") : console.log("é Par");

//SWITCH CASE
var notaFelipeR = 5
switch(notaFelipeR > 7){
    case true:
        console.log("Aprovado")
        break;
        case false:
        console.log("Reprovado")
        break;
}


