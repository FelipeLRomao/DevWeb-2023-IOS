alert("Saudações Corinthiana irmão alvinegro");

var a = prompt("Digite um valor para a equação");
var b = prompt("Digite outro valor na equação");
var c = prompt("Digite mais um valor para equação");

const delta = b * b -4 * a * c;
const x1 = (-b + Math.sqrt(delta))/(2*a);
const x2 = (-b - Math.sqrt(delta)) /(2*a);

console.log(x1);
console.log(x2);
