// Parte I - Objetos e For/In
/* let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Atividade 1
console.log('Bem vinda, ' + info.personagem);

// Atividade 2
info.recorrente = 'Sim';
console.log(info);

// Atividade 3
for (chaves in info) {
  console.log(chaves);
}

// Atividade 4
for (valores in info) {
  console.log(info[valores]);
};

// Atividade 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (concat in info, info2) {
  if (info[concat] !== info2[concat]) {
    console.log(info[concat] + ' e ' + info2[concat]);
  } else {
    console.log('Ambos são recorrentes');
  };
};

// Atividade 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '\'' + leitor.livrosFavoritos[0].titulo + '\'.');

// Atividade 7
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },
)
console.log(leitor);

// Atividade 8
console.log(leitor.nome + ' tem ' +  leitor.livrosFavoritos.length + ' livros favoritos ');

// Parte II - Funções
// Atividade 1
function palindromo(palavra) {
  if (palavra === palavra.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromo('arara'));

// Atividade 2
function numeroMaior(inteiro) {
  let posicaoMaior = 0;
  for (let i = 0; i < inteiro.length; i += 1) {
    if (inteiro[i] > inteiro[posicaoMaior]) {
      posicaoMaior = i;
    };
  };
  return posicaoMaior;
};
console.log(numeroMaior([2, 3, 6, 7, 10, 1])); 

// Atividade 3
function numeroMenor(inteiros) {
  let posicaoMenor = 0;
  for (let i = 0; i < inteiros.length; i += 1) {
    if (inteiros[i] < inteiros[posicaoMenor]) {
      posicaoMenor = i;
    };
  };
  return posicaoMenor;
};
console.log(numeroMenor([2, 4, 6, 7, 10, 0, -3]));

// Atividade 4
function nomes(palavras) {
  let guardaPalavra = palavras[0];
  for (let i = 0; i < palavras.length; i += 1) {
    if (guardaPalavra.length < palavras[i].length) {
      guardaPalavra = palavras[i];
    };
  };
  return guardaPalavra;
};
console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); */

// Atividade 5
function numerosRepetidos(repetido) {
  let contaNum = [];
  let auxiliar;
  let posicaoMaior = 0;
  // O primeiro e o segundo for lêem o array e o if compara os dois para ir guardando quantos há de cada numero na array contaNum
  for (let i = 0; i < repetido.length; i += 1) {
    auxiliar = 0;
    for (let j = 0; j < repetido.length; j += 1) { 
      if (repetido[i] === repetido[j]) {
        auxiliar += 1;
      };
    };
    contaNum.push(auxiliar);
    };
    // Esse for é para buscar o numero que mais se repetiu, e usei o conta num alinhado ao repetido para armazenar a informação e retornar o numero e não o indice
    for (let i = 0; i < contaNum.length; i += 1) {
      if (contaNum[i] > contaNum[posicaoMaior]) {
        posicaoMaior = i;
      };
    };
    return repetido[posicaoMaior];
  };
console.log(numerosRepetidos([2, 3, 2, 5, 8, 2, 3]));

// Atividade 6

// Atividade 7

