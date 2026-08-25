class Aluno {
    constructor(nome, idade){
        this.nome =nome;
        this.idade = idade;
    
    };
    apresentar(){
        console.log('${this.nome} - idade: ${this.idade}');
    } 
}
const aluno = new aluno("Julia", 17);
aluno.apresentar();

const aluno2 = new aluno("Isabella", 17);
aluno.apresentar();