import { Connect4__factory } from "./contracts";
import config from "./config.json";
import { wallet } from "./wallet";

export const connect4Contract = Connect4__factory.connect(config.contractAddress, wallet);
