import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Ricardo","111.111.111-11");
const contaCorrenteRicardo = new ContaCorrente(1001);

cliente1.conta = contaCorrenteRicardo 

try {
  contaCorrenteRicardo.deposita(300);
  contaCorrenteRicardo.deposita(100);
  contaCorrenteRicardo.sacar(500);
} catch (error) {
  console.log(`${error}`)
}

try {
  contaCorrenteRicardo.deposita(-1);
} catch (error) {
  console.log(`${error}`)
}


const cliente2 = new Cliente("Kemoel", "000.000.000-00");
const contaCorrenteKemoel = new ContaCorrente(1002);

cliente2.conta = contaCorrenteKemoel

contaCorrenteRicardo.transferir(contaCorrenteKemoel, 50)

console.log(cliente2.conta)
console.log(cliente1.conta)
console.log(ContaCorrente.numeroDeContas)