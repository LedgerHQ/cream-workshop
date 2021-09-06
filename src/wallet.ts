import { Wallet } from "ethers";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { provider } from "./provider";

const walletPath = "./wallet.pvkey";

const loadedWallet: Wallet | null = null;

export function getWallet(): Wallet {
    if (loadedWallet) {
        return loadedWallet;
    }

    if (existsSync(walletPath)) {
        const privateKey = readFileSync(walletPath);
        const wallet = new Wallet(privateKey.toString());
        return wallet.connect(provider);
    }

    const wallet = Wallet.createRandom();
    writeFileSync(walletPath, wallet.privateKey);
    return wallet.connect(provider);
}

export const wallet = getWallet();
