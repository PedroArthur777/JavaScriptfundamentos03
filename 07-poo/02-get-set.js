class Pessoa{

    get nome (){
        return this.nome;
    }

    set nome(valor){
        if(valor.lenght >=2) this.#nome = valor;
    }
}

const pessoa = new pessoa ("Isabella");
    console.log(pessoa.nome);
    pessoa.nome = "Larissa";
    console.log(pessoa.nome);

