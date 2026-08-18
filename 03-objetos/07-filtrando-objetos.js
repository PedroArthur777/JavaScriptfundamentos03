const aluno = [
    {nome: "Pablo", nota: 8},
    {nome: "João", nota: 8},
    {nome: "Larissa", nota: 8},
   
];

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
console.log(aprovados);