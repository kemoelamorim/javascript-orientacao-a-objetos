import { ContaCorrente } from './ContaCorrente.js';

export class Cliente{
  
  _conta;
  constructor(nome, cpf){
    this._nome = nome;
    this._cpf = cpf;
  }

  get nome(){
    return this._nome;
  }
  
  set nome(nome){
    this._nome = nome;
  }
  
  get cpf(){
    return this._cpf;
  }
  
  get conta(){
    return this._conta
  }

  set conta(conta){
    if(conta instanceof ContaCorrente){
      this._conta = conta;
    }
  }
}