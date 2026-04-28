//let txt01 = document.querySelector("h1");
//txt01 = "Hora do Desafio!";
//
//function botaoConsole(){
//    console.log("O botão foi clicado.");
//}
//
//function botaoAlerta(){
//    alert("Eu amo JavaScript.");
//}
//
//function botaoPrompt(){
//    let cidade = prompt("Nome de uma cidade do Brasil:");
//    alert(`Estive em ${cidade} e lembrei de você.`);
//}
//
//function botaoSoma(){
//    let num1 = parseInt(prompt("Digite um número:"));
//    let num2 = parseInt(prompt("Digite outro número:"));
//    let resultadoSoma = num1 + num2;
//
//    alert(`${num1} + ${num2} = ${resultadoSoma}`);
//}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function mensagem(){
//    console.log("Olá mundo!");
//}
//
//mensagem();

//function receberNome(nome){
//    console.log(`Olá ${nome}`);
//}
//
//receberNome("Augusto");

//function recebeNumero(numero){
//    return numero * 2;
//}
//
//let dobro = recebeNumero(5)
//console.log(dobro);

//function mediaAritmetica(a, b, c){
//    return (a + b + c) / 3;
//}
//
//let resultadoMedia = mediaAritmetica(5, 5, 5);
//console.log(resultadoMedia);

//function numeroMaior(a, b){
//    return a > b ? a : b;
//}
//
//let numeros = numeroMaior(8, 5);
//console.log(numeros);

//function multiplicacao(numero){
//    return numero * numero;
//}
//
//let resultado = multiplicacao(5);
//console.log(resultado);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function calculoIMC(altura, peso){
//    let imc = peso / (altura * altura);
//}

//function calculoFatorial(num){
//    let resultado = num;
//    let contadorFatorial = num - 1;
//
//    while(contadorFatorial >= 1){
//        resultado = resultado * contadorFatorial;
//        contadorFatorial--;
//    }
//
//    return resultado;
//}

//function dolarEmReais(dolar){
//    let cotaDoDolar = 4.80;
//    let reais = dolar * cotaDoDolar;
//    return reais.toFixed(2);
//}

//function calculoRetangulo(altura, largura){
//    let resultadoPerimetro = 2 * (altura + largura);
//    let resultadoArea = altura * largura;
//    
//    console.log(`O perímetro da sala é de ${resultadoPerimetro} metros.`);
//    console.log(`A área da sala é igual a ${resultadoArea} metros quadrados.`);
//}

//function calculoCirculo(raio){
//    let perimetro = 2 * Math.PI * raio;
//    let area = Math.PI * (raio * raio);
//
//    console.log(`O perímetro da sala é igual a ${perimetro} metros.`);
//    console.log(`A área da sala é igual a ${area} metros quadrados.`);
//}
//
//let raio = 4;
//calculoCirculo(raio);

//function mostrarTabuada(numero){
//    let multiplicador = 1;
//    while(multiplicador <= 10){
//        let resultado = numero * multiplicador;
//        console.log(`${numero} x ${multiplicador} = ${resultado}`);
//        multiplicador++;
//    }
//}
//
//let numero = 3;
//mostrarTabuada(numero);