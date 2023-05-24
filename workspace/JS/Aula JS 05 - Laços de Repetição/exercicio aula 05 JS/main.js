let contador = 1;
while (contador <= 50) {
console.log(contador);
contador++;
}

// do-while
console.log("Laço de repetição com Do-While");
let count = 10;

do {
  console.log(count);
  count--;
} while (count >= 0);

console.log("Mostrando numeros pares de 0 a 100 com for");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }