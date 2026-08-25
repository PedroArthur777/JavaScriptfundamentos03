class Funcionario{
    constructor(nome, salario){
        this.salario = salario
    }
}

class Professor extends Funcionario{
    constructor(nome,salario, disciplina){
        super(nome, salario);
        this.disciplina = disciplina
}

}

const professor = new professor ("Arthur", 500, "Programação");
console.log(professor);