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
console.log(palindromo('arara')); */

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

// Atividade 4

// Atividade 5

// Atividade 6

// Atividade 7

