/*
Crie um Array unidimensional com 8 posições contendo os
seguintes valores 17, 43, 8, 4, 97, 56, 29 em cada posição
irá conter um valor do tipo number.

    ● utilizando o método forEach crie uma função que receba
    cada valor do array e verifique se o número é par ou
    ímpar e exiba o resultado no console.log
*/

let nums = [17, 43, 8, 4, 97, 56, 29];

nums.forEach(numeros);
function numeros(nums){
    if(nums % 2 == 0){
        console.log(`${nums} É Par`);
    }else{
        console.log(`${nums} É Ímpar`)
    }
}

/*
Crie um Array unidimensional com 14 posições contendo os
seguintes valores 17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82,
61 em cada posição irá conter um valor do tipo number.

    ● Utilizando Arrow Function com o método filter crie uma
    verificação para retornar somente os valores que estão
    entre o número 20 e 80.
*/

let nums2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

let filtroNumeros = nums2.filter((numeros2) => {
   return numeros2 >= 20 && numeros2 <= 80;
});
console.log("Numeros entre 20 e 80")
console.log(filtroNumeros);