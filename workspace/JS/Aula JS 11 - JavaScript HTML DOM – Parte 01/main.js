//window.alert('Olá alunos');
//alert('Olá alunos2');

// JavaScript e DOM
// objeto document
console.log(document);

// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o título
document.title = 'socorro Deus';
// Criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Olá alunos IOS!';
document.body.appendChild(heading);


document.createElement('BUTTON');
document.createElement('p');
document.createElement('img');