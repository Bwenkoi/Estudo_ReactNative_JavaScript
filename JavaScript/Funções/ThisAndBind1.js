const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }

}

pessoa.falar()

const falar = pessoa.falar
//falar() Conflito entre paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
