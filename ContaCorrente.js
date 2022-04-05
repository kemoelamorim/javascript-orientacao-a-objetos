export class ContaCorrente{
  static numeroDeContas = 0;
  _saldo = 0;
  
  constructor(agencia){
    this._agencia = agencia;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor){
    if(this._saldo < valor) throw new Error(`Valor disponível para saque: ${this._saldo}`);
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