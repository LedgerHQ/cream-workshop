#!/usr/bin/env node
import yargs from "yargs/yargs";
import { printGameState } from "./helpers";
import config from "./config.json";

// function to implement
import { claimWin } from "./logic/claimWin";
import { newGame } from "./logic/newGame";
import { resignGame } from "./logic/resignGame";
import { getGameState } from "./logic/showGameState";
import { getMyActiveGames } from "./logic/showMyActiveGames";
import { takeTurn } from "./logic/takeTurn";

import { wallet } from "./wallet";
import { provider } from "./provider";
import { formatEther } from "@ethersproject/units";
import { interactive } from "./logic/interactive";

async function main() {
    console.log(`Public address is: [${wallet.address}]`);
    await provider.ready;
    const balance = await wallet.getBalance();

    console.log(`Connected to ${config.network.name}`);
    console.log(`Balance is ${formatEther(balance)} ${config.network.currency}`);

    const argv = yargs(process.argv.slice(2))
        .command("takeTurn", "place a token in the grid", (yargs) => {
            return yargs
                .option("gameId", {
                    alias: "id",
                    type: "number",
                    demandOption: true,
                    description: "target game id"
                })
                .option("x", {
                    type: "number",
                    demandOption: true,
                    description: "tergeted column"
                });
        }, (argv) => {
            takeTurn(argv.gameId, argv.x);
        })
        .command("showGameState", "display the current grid state of a game", (yargs) => {
            return yargs
                .option("gameId", {
                    alias: "id",
                    type: "number",
                    demandOption: true,
                    description: "target game id"
                });
        }, async (argv) => {
            const gameState = await getGameState(argv.gameId);
            printGameState(gameState);
        })
        .command("showMyActiveGames", "show all the games that include me", async () => {
            const activeGames = await getMyActiveGames();
            console.log(activeGames);
        })
        .command("newGame", "challenge another player", (yargs) => {
            return yargs
                .option("address", {
                    type: "string",
                    demandOption: true,
                    description: "address of the challenged player (player2)"
                });
        }, (argv) => {
            return newGame(argv.address);
        })
        .command("resignGame", "forfeit from an ongoing game", (yargs) => {
            return yargs
                .option("gameId", {
                    alias: "id",
                    type: "number",
                    demandOption: true,
                    description: "target game id"
                });
        }, (argv) => {
            return resignGame(argv.gameId);
        })
        .command("interactive", "play the game in real time", (yargs) => {
            return yargs
                .option("gameId", {
                    alias: "id",
                    type: "number",
                    demandOption: true,
                    description: "target game id"
                });
        }, (argv) => {
            return interactive(argv.gameId);
        })
        .command("claimWin", "claim victory if your opponent was AFK for too long", (yargs) => {
            return yargs
                .option("gameId", {
                    alias: "id",
                    type: "number",
                    demandOption: true,
                    description: "target game id"
                });
        }, (argv) => {
            return claimWin(argv.gameId);
        })
        .epilogue("Thanks for learning with us ! - Ledger")
        .help()
        .argv;

    await argv;
}

main().then(() => {
    process.exit();
});