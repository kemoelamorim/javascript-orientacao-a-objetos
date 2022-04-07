import { Conta } from './Conta.js';

export class ContaSalario extends Conta{
  static numeroDeContas = 0;
  
  constructor(agencia, saldo){
    super(agencia, saldo)
    ContaSalario.numeroDeContas += 1;
  }
  sacar(valor){
    let taxa = 1.01;
    return super._sacar(valor, taxa)
  }
}