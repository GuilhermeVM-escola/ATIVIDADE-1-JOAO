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

let preco = 75;

if (preco > 50) {
  console.log('O PREÇO E MAIOR QUE 50');
} else {
  console.log('O PREÇO É MENOR QUE 50');
}

/////////////////////////////////////////////////////

let idade = 18;

if (idade >= 18) {
  console.log('ACESSO CONCEDIDO, VOCÊ TEM 18 ANOS OU MAIS');
} else {
  console.log('ACESSO NEGADO, VOCÊ É MENOR DE IDADE');
}

//------Operador Ternário------//

let nota = 9;

let resultado = nota >= 7 ? "aprovado" : "reprovado";

console.log('RESULTADO DO ALUNO:', resultado); 
  
/////////////////////////////////////////////////////

let idade = 16;

let status = idade >= 18 ? "adulto" : "menor";

console.log('A PESSOA É:', status);

//------Template Literals------//

let nome = "João";

console.log('Salve', nome); 

/////////////////////////////////////////////////////

let produto = "Relogio do João";
let preco = 23;
let quantidade = 2;

let frase = "VOCÊ COMPROU " + quantidade + " UNIDADES DO " + produto + " por R$: " + preco + " cada.";

console.log(frase);

//------Atividade de Integração------//

const nome = "João";
let idade = 23;

let classificacao = idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE";

let mensagem = "OPA, " + nome + " VOCÊ FOI SEPARADO COMO: " + classificacao + "BOA";

console.log(mensagem);




