let num1 = 10
let num2 = 10

let soma = num1 + num2;
console.log('O RESULTADO DA SOMA SERA:', soma);

/////////////////////////////////////////////////////

let subtração = num1 - num2
console.log('O RESULTADO DA SUBTRAÇÃO SERA:', subtração);

/////////////////////////////////////////////////////

let multiplicação = num1 * num2
console.log('O RESULTADO DA MULTIPLICAÇÃO SERA:', multiplicação);

/////////////////////////////////////////////////////

let divisão = num1 / num2
console.log('O RESULTADO DA DIVISÃO SERA:', divisão);

//------Operadores de Comparação (Relacionais)------//

if (10 == 10) {
    console.log('O VALOR SERA IGUAL'); 
}

if (10 != 10) {
console.log('OS VALORES SERA DIFERENTE');
}

/////////////////////////////////////////////////////

if (5<10){
    console.log('O VALOR SERÁ MENOR')
};

let preco1 = 75;

if (preco1 > 50) {
  console.log('O PREÇO E MAIOR QUE 50');
} else {
  console.log('O PREÇO É MENOR QUE 50');
}

/////////////////////////////////////////////////////

let idade3 = 18;

if (idade3 >= 18) {
  console.log('ACESSO CONCEDIDO, VOCÊ TEM 18 ANOS OU MAIS');
} else {
  console.log('ACESSO NEGADO, VOCÊ É MENOR DE IDADE');
}

//------Operador Ternário------//

let nota = 9;

let resultado = nota >= 7 ? "aprovado" : "reprovado";

console.log('RESULTADO DO ALUNO:', resultado); 
  
/////////////////////////////////////////////////////

let idade2 = 16;

let status = idade2 >= 18 ? "adulto" : "menor";

console.log('A PESSOA É:', status);

//------Template Literals------//

let nome2 = "João";

console.log(`Salve, ${nome2}`); 

/////////////////////////////////////////////////////

let produto = "Relogio do João";
let preco = 23;
let quantidade = 2;

let frase = "VOCÊ COMPROU " + quantidade + " UNIDADES DO " + produto + " por R$: " + preco + " cada.";

console.log(frase);

//------Atividade de Integração------//

const nome1 = "João";
let idade1 = 23;

let classificacao = idade1 >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE";

let mensagem = "OPA, " + nome1 + " VOCÊ FOI SEPARADO COMO: " + classificacao + "BOA";

console.log(mensagem);

