# C.R.E.A.M Workshop
## _Crypto Rules Everything Around Me_

Welcome to the *cream* workshop. The objective of this workshop is to give you a basic understanding on the following web3 topics:

- Reading data on chain
- Writing data on chain
- Subscribe and react to events, in real time

## The Workshop
For this workshop, we'll try to have you implement a CLI client (command line interface) allowing to interact with a precedently published smart-contract. The smart contract define the implementation of a classic game that everyone should know: Connect 4.

![connect4](https://camo.githubusercontent.com/36e1b8209ca4d86dce6fd60284a876b18e37570591dc67570fdd85f46a6210c4/68747470733a2f2f7669676e657474652e77696b69612e6e6f636f6f6b69652e6e65742f636c6173686f66636c616e732f696d616765732f362f36392f436f6e6e6563742d666f75722e706e67)

The rules are simple: The game is a duel between two players. It is played turn by turn and each turn, one player adds a token in the grid by selecting a column. The token then fall down to the end of the column. There is a winner when a player successfully align 4 tokens of his color in any direction (horizontal, vertical or diagonal).

## The Network
For this workshop, we won't use directly the Ethereum Network but the Polygon one, which share exactly the same interface and has the same capatibilities, except it's a lot faster. We will use the Mumbai testnet to avoid spending real money :)

Please note that on the Polygon network, the first class citizen currency is not **ETH** but **MATIC**.

## The Contract

For this workshop's needs, our team deployed a smart contract here: `0x20deb5dbdee348d3c53b63c8e7e2263502dd5618`
You can use [Polygon Scan](https://mumbai.polygonscan.com/address/0x20deb5dbdee348d3c53b63c8e7e2263502dd5618) to inspect contract code and experiment with all the defined read and write methods.

In general, contracts implement multiple types of methods:
#### Read (views)
Methods defined as views are free to use. They do not need to be part of a transaction and can simply be executed on a node. They can't perform any change to the state.
#### Write
Write methods need to be executed by a transaction and will cost fees to execute. Fees are refered as gas and the needed amount will depend on the written data's complexity. They cannot return any value but can throw.
#### Event
Events are defined on the contract's code and can be emited by write methods at will. When a write method is successfully executed, all clients subscribed to the emitted event will receive a notification in real time.

## Getting Started

1. Clone this repository locally.
```
git clone https://github.com/LedgerHQ/cream-workshop.git
```
2. Install dependencies with `yarn`
3. Run the **CLI** a first time with no arguments to display your public address and Matic balance `yarn start`
4. You need to pay to write stuff on the blockchain. To get some funds, paste your public address on the form at https://faucet.matic.network/ (default settings) and you will receive some free testnet Matic.

## The Goal

This repository is a boilerplate for a CLI. The logic is not implemented and will be yours to code. All commands are already defined along with their respective parameters and can be called from the terminal:

```
Commands:
  takeTurn           place a token in the grid
  showGameState      display the current grid state of a game
  showMyActiveGames  show all the games that include me
  newGame            challenge another player
  showGameData       display game data for a given game
  resignGame         forfeit from an ongoing game
  claimWin           claim victory if your opponent was AFK for too
                     long
  interactive        play the game in real time (boss level)
```

Every command has a handler that is currently empty. Handlers are declared in `/src/logic`

### I) Read
The first goal of this workshop is to successfully retrieve data from the blockchain. Work on doing that by implementing `showGameState`, `showMyActiveGames` and `showGameData`.

### II) Write
The second goal of this workshop is to write on the blockchain by sending transactions. Try to implement `takeTurn`, `newGame`, `resignGame` and `claimWin`.

If you brillantly completed those two steps, you should already be able to play a full game, choose your opponents carefully ! ;)

### III) Listen and react to events
The final part of this workshop is to implement the `interactive` command. This command should allow you to play a whole game interactively, prompting you for your next move when it's your turn to play and showing your opponent's moves in real time.

To achieve this you will have to subscribe to contract events. Those events could be found

## Resources
- **Ethers JS V5** documentation: https://docs.ethers.io/
Ethers.js is a widely used library (like web3.js) abstracting in a confortable way all the logic needed to build a modern web3 application. Everything information you need to complete the workshop should be in the doc.

- The **Connect4** contract on [Polygon Scan ](https://mumbai.polygonscan.com/address/0x20deb5dbdee348d3c53b63c8e7e2263502dd5618):
**Polygonscan** is the polygon counterpart of the very famous **Etherscan**. It allow you to both see in real time all transactions emited on the network and inspect contract source codes, methods and events. Use it.

- Matic Mumbai **Faucet** https://faucet.matic.network/
Free dispenser of MATIC for endless testing. Be careful not to abuse it or you might end up in the gray list.

- **Ledger** Connect4 Game Viewer: *add address*
Watch everyone playing in real time with a specifically crafted DApp for the event.

## What's next ?
You made it till the end ? Congratz. You now understand the basics of **web3** development. All the code you've been playing with could actually run in the front-end. From a CLI to a webapp, the line is thin. From there, imagination is the limit, experiment creating a front-end for existing public contracts or try publishing your own by learning **solidity**. 

## License

MIT

**Powered by Ledger**
