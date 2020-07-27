class Lancamento {
    constructor(nome = 'Genério', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 4500)
const contaDeLuz = new Lancamento('Luz', -500)
const contaDeAgua = new Lancamento('Água', -200)
const contaDeInter = new Lancamento('Internet', -100)

const contas = new CicloFinanceiro(7, 2019)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua, contaDeInter)
console.log(contas.sumario())