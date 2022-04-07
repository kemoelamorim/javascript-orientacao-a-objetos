import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta{
  static numeroDeContas = 0;
  
  constructor(agencia, saldo){
    if(saldo < 100 || typeof saldo != 'number'){
      throw new Error("O saldo mínimo para abertura de uma poupança é de R$100,00")
    }
    super(agencia, saldo)
    ContaPoupanca.numeroDeContas += 1;
    
  }
  sacar(valor){
    let taxa = 1.02
    return super._sacar(valor, taxa)
  }
}