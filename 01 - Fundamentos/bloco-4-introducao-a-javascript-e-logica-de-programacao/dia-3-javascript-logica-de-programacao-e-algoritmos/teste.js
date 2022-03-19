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
