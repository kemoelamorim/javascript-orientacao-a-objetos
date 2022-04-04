class Cliente{
  nome;
  cpf;
  agencia;
  saldo;
  rg;
}
const cliente1 = new Cliente()
const cliente2 = new Cliente()

cliente1.nome = "Ricardo"
cliente1.cpf = "111.111.111-11"
cliente1.agencia = 1001
cliente1.saldo = 0
cliente1.rg = 892302
console.log(cliente1)


cliente2.nome = "Alice"
cliente2.cpf = "222.222.222-22"
cliente2.agencia = 1001
cliente2.saldo = 0
cliente2.rg = 2323242

console.log(cliente2)