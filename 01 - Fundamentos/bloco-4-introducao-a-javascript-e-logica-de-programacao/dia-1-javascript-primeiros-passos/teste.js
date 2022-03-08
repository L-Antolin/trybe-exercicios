// Exercício 1
/*let a = 2;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);*/

// Exercício 2
/*let a = 5;
let b = 2;

if(a>b) {
  console.log(a);
}
else {
    console.log(b);
}*/

//Exercício 3
/*let a = 2;
let b = 4;
let c = 3;

if( (a > b) && (a > c) ) {
  console.log(a);
}

else if( (b > a) && (b > c)) {
  console.log(b);
}

else {
  console.log(c);
}*/

//Exercício 4
/*const x = -24;

if(x > 0) {
  console.log("positive");
}

else if(x < 0) {
  console.log("negative");
}

else {
  console.log("zero");
}*/

//Exercício 5
/*const anguloA = 30;
const anguloB = 60;
const anguloC = 90;

if(anguloA < 0 || anguloB < 0 || anguloC < 0) {
  console.log("Erro, ângulos inválidos.")
}

else if(anguloA+anguloB+anguloC == 180) {
  console.log("true");
}

else {
  console.log("false")
}*/

//Exercício 6 - movimento de peças encontrado no link : https://www.chesshouse.com/pages/chess-rules 
//e toLowerCase encontrado no link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
/*let piece = "Queen";

switch(piece.toLowerCase()) {
  case "king" : 
    console.log("Moves from its square to a neighboring square");
    break;

  case "rook" :
    console.log("Move in its line or row");
    break;

  case "bishop" :
    console.log("Moves diagonally");
    break;
  
  case "queen" :
    console.log("Move like a Rook or a Bishop");
    break;

  case "knight" :
    console.log("Jumps in making the shortest move that is not a straight one");
    break;

  case "pawn" :
    console.log("Moves one square straight ahead");
    break;

  default:
    console.log("Error, invalid piece!");
}*/

//Exercício 7
/*let nota = 92;

if( (nota > 100) || (nota < 0)) {
  console.log("Erro");
}
else if(nota >= 90) {
  console.log("A");
}
else if(nota >= 80) {
  console.log("B");
}
else if(nota >= 70) {
  console.log("C");
}
else if(nota >= 60) {
  console.log("D");
}
else if(nota >= 50) {
  console.log("E");
}
else if(nota < 50) {
  console.log("F");
}*/

//Exercício 8
/*let a = 5;
let b = 7;
let c = 3;

if(a %2 == 0 || b %2 == 0 || c %2 == 0) {
  console.log("true");
}
else {
  console.log("false");
}*/

//Exercício 9
/*let a = 9;
let b = 3;
let c = 5;

if(a %2 != 0 || b %2 != 0 || c %2 != 0) {
  console.log("true");
}
else {
  console.log("false");
}*/

//Exercício 10
let valorCusto = 8;
let valorVenda = 20;
let valorCustoTotal = valorCusto + valorCusto*0.2;
let lucro = valorVenda - valorCustoTotal;

if(valorCusto <=0 || valorVenda <=0) {
  console.log("Erro");
}
else {
  console.log(1000*lucro);
}
