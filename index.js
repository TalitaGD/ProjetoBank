import {cliente} from "./cliente.js";
import {contaCorrente} from "./ContaCorrente.js";

const cliente1 = new cliente("Ricardo", 11111111111);
const cliente2 = new cliente("Alice", 222222222222);

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new contaCorrente(202, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(200, conta2);
