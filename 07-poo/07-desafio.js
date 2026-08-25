class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome;
        this.nota1nota1 = nota1;
        this.nota2 = nota2;
    }
    CalcularMedia(){
        return (this.nota1 + this.nota2) /2;

    }
    VerificrSituacao(){
    return this.CalcularMedia() >= 7 ? "Aprovado" : "reprovado";
    }
    exibirDados(){
        console.log('${this.nome} | Média: ${this.calcularMedia() | this.verificarSituacao()}')
    }
}

const alunos =[
    new Aluno("Julia, 8,9"),
    new Aluno("Sofia", 4,5),
    new Aluno("Isabela", 7,8),
];

alunos.forEach((aluno) => aluno.exibirDados());