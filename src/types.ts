import { BigNumber } from "ethers";

export type GameData = {
    player1: string;
    player2: string;
    isOver: boolean;
    isPlayer1Next: boolean;
    claimTime: number;
    p1Amount: BigNumber;
    p2Amount: BigNumber;
}
