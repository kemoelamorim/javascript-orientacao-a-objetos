import { Conta } from './Conta/Conta.js';

export class Cliente{
  
  constructor(nome, cpf, senha){
    this._nome = nome;
    this._cpf = cpf;
    this._senha = senha;
    this._contas = [] ;
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
  
  get contas(){
    return this._contas
  }

  set conta(conta){
    if(conta instanceof Conta){
      this._contas.push(conta);
    }
  }
  autenticar(senha){
    return this._senha == senha;
  }  
}