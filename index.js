import { Cliente } from './Cliente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { SistemaDeAutenticacao } from './SistemaDeAutenticacao.js';

const diretor = new Diretor("Kemoel", 10000.00, "999.222.333-99")
const gerente = new Gerente("Ricardo", 5000.00, "000.000.000-00")

const cliente = new Cliente("Thamiris", "222.222.222-22", "Music@eeu123")

diretor.cadastrarSenha(1234)
gerente.cadastrarSenha(4321)


const diretorLogado= SistemaDeAutenticacao.login(diretor, "1234")
const gerenteLogado = SistemaDeAutenticacao.login(gerente, "4321")
const clienteLogado = SistemaDeAutenticacao.login(cliente, "Music@eeu123")

console.log(diretorLogado)
console.log(gerenteLogado)
console.log(clienteLogado)