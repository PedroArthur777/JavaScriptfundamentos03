class contaBancaria {
    #saldo = 0;

    depositar(valor){
        if(valor > 0) this.saldo += valor
    }

    consultaSaldo(){
        return this.#saldo;
    }
}

const contaJulia = new contaBancaria();
contaJulia.depositar(100);
console.log(contaJulia.consultaSaldo());
    