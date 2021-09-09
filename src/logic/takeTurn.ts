import { wallet } from "../wallet";
import { connect4Contract } from "../contract";
import { ethers } from "ethers";

// use me
const betAmount = ethers.utils.parseEther("0.001");

export async function takeTurn(gameId: number, x: number): Promise<void> {
    throw new Error("implement me :)");
}
