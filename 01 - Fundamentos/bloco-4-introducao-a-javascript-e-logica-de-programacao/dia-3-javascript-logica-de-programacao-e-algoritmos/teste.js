// Atividade 1
let fatorial = 1;
for (let i = 2; i <= 10; i +=1) {
  fatorial = fatorial * i;
}
console.log(fatorial);

// Atividade 2
let word = 'banana';
let palavraIvertida = '';
for (let i = word.length -1; i >= 0; i -=1) {
  palavraIvertida += word[i];
}
console.log(palavraIvertida);

// Atividade 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
for (let i = 0; i < array.length; i +=1) {
  if (maiorPalavra.length < array[i].length) {
    maiorPalavra = array[i];
  }
}
console.log(maiorPalavra);

let menorPalavra = array[0];
for (let index = 0; index < array.length; index +=1) {
  if (menorPalavra.length > array[index].length) {
    menorPalavra = array[index];
  }
}
console.log(menorPalavra);

// Atividade 4
let num = 50;
let numerosPrimos = [];
let calculoBase = '';
for (let i = 2; i <= num; i +=1) {
  for (let index = 2; index <= i; index +=1) {
    if (i % index === 0 && index < i) {
      break;
    } else if (index === i) {
      numerosPrimos.push(i);
    }
  }
}
// console.log(numerosPrimos);
let maiorPrimo = numerosPrimos[0];
for (let j = 0; j < numerosPrimos.length; j +=1) {
  if (maiorPrimo < numerosPrimos[j]) {
    maiorPrimo = numerosPrimos[j];
  }
}
console.log('O maior número primo de 0 a 50 é ' + maiorPrimo);
