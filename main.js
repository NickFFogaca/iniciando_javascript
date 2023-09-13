// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

// alert('Helo World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

// let n1 = Number('1')
// let n2 = Number('2')

// alert(n1 + n2)


// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

// let n1 = 1;

// if (typeof n1 === 'number') {
//     alert('É um número')

// } else{
//     alert('Não é um número')
// }

// let input = prompt('Por favor, insira um valor:');

// let valor = parseFloat(input);

// if (!isNaN(valor)) {
//   alert('É um número');
// } else {
//   alert('Não é um número');
// }



//     💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

// let n1 = 'oie';

// if (typeof n1 === 'string') {
//     alert('É uma string')

// } else{
//     alert('Não é uma string')
// }

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

// let minhaVariavel = true; 

// if (typeof minhaVariavel === "boolean") {
//     alert("É um booleano");
// } else {
//     alert("Não é um booleano");
// }


// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

// let n1 = 2;

// let n2 = 5;

// let sum = n1+n2;

// alert(sum)


// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// let n1 = 2;

// let n2 = 5;

// let mult = n1*n2;

// alert(mult)


// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
// let n1 = 2;

// let n2 = 5;

// let restDiv = n1%n2;

// alert(restDiv)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

// const n1 = prompt('Digite um número e irei verificar se é par ou ímpar: ');

// const parOrImpar = (n1%2);

// if(parOrImpar == 0 ) {
//     alert('É um número par')

// } else {
//     alert('Não é um número par')
// }


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const n1 = prompt('Digite um número e irei verificar se é par ou ímpar: ');

const parOrImpar = (n1%2);

if(parOrImpar != 0 ) {
    alert('É um número ímpar')

} else {
    alert('Não é um número ímpar')
}