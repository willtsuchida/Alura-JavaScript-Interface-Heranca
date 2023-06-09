import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor) {
        const taxa = 1.1;
        super._sacar(valor, taxa);
    }

}