// Parte I - Objetos e For/In
/*let info = {
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
}; */

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

//console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '\'' + leitor.livrosFavoritos[0].titulo + '\'.');

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
