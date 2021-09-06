import { connect4Contract } from "../contract";

export async function getGameState(gameId: number): Promise<number[][]> {
    const board = await connect4Contract.getBoard(gameId);
    return board;
}
