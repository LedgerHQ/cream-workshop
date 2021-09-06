import { getWallet } from "../wallet";

export async function newGame(address: string): Promise<void> {
    const wallet = await getWallet();

    console.log(wallet.address);
    throw new Error("implement me :)");
}
