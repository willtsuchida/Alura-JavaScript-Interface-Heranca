import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Cliente } from "./Cliente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 1234568249);
diretor.cadastrarSenha(1234);

const gerente = new Gerente("Ricardo", 5000, 34442341514);
gerente.cadastrarSenha(1234);

const cliente = new Cliente("Lais", 1239812903, 456);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, 1234);
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 1234);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 456);

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);