const Ayoayo = require('./Ayoayo');

function testGame() {
    const game = new Ayoayo();
    const player1 = game.createPlayer("Jensen");
    const player2 = game.createPlayer("Brian");
    console.log(game.playGame(1, 3));
    console.log(game.playGame(1, 1));
    console.log(game.playGame(2, 3));
    console.log(game.playGame(2, 4));
    console.log(game.playGame(1, 2));
    console.log(game.playGame(2, 2));
    console.log(game.playGame(1, 1));
    game.printBoard();
    console.log(game.returnWinner());
}

testGame();