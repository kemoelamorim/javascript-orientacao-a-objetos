// Classe abstracted
export class Conta{
  static numeroDeContas = 0;
  
  constructor(agencia, saldo){
    if(this.constructor == Conta){
      throw new Error("Abstract Class: Conta não deve ser instanciada")
    }
    this._agencia = agencia;
    this._saldo = saldo;
    Conta.numeroDeContas += 1;
  }

  sacar(valor){
    throw new Error("O método sacar é abstract, por isso deve ser implementado nas classe filha.")
  }
  
  _sacar(valor, taxa){
    let valorSacado = valor - taxa;
    if(this._saldo < valorSacado) throw new Error(`Valor disponível para saque: ${this._saldo}`);
    this._saldo -= valor;
    return valor;
  }

  deposita(valor){
    if(valor <= 0) throw new Error(`Valor ${valor}, inválido para depósito`);
    this._saldo += valor;
    return valor;
  }
  transferir(destino, valor){
    destino.deposita(this.sacar(valor));
    return;
  }

  get agencia(){
    return this._agencia;
  }
  get saldo(){
    return this._saldo;
  }
  
}