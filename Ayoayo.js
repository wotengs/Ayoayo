class Player {
    constructor(name) {
        this.name = name;
        this.pits = [4, 4, 4, 4, 4, 4];
        this.store = 0;
    }
}

class Ayoayo {
    constructor() {
        this.players = [null, null];
        this.currentPlayer = 1;
        this.gameEnded = false;
    }

    createPlayer(name) {
        if (!this.players[1]) {
            this.players[1] = new Player(name);
            return this.players[1];
        } else if (!this.players[2]) {
            this.players[2] = new Player(name);
            return this.players[2];
        }
        return null;
    }

    printBoard() {
        const player1 = this.players[1];
        const player2 = this.players[2];

        console.log("player1:");
        console.log(`store: ${player1.store}`);
        console.log(player1.pits.join(', '));

        console.log("\nplayer2:");
        console.log(`store: ${player2.store}`);
        console.log(player2.pits.join(', '));
    }

    returnWinner() {
        if (!this.gameEnded) return "Game has not ended";

        const player1 = this.players[1];
        const player2 = this.players[2];

        if (player1.store > player2.store) {
            return `Winner is player 1: ${player1.name}`;
        } else if (player2.store > player1.store) {
            return `Winner is player 2: ${player2.name}`;
        } else {
            return "It's a tie";
        }
    }

    playGame(playerIndex, pitIndex) {
        if (this.gameEnded) return "Game is ended";
        if (pitIndex <= 0 || pitIndex > 6) return "Invalid number for pit index";

        const player = this.players[playerIndex];
        const opponent = this.players[playerIndex === 1 ? 2 : 1];

        const pitIdx = pitIndex - 1;

        if (player.pits[pitIdx] === 0) {
            return "Invalid move - selected pit is empty";
        }

        let seeds = player.pits[pitIdx];
        player.pits[pitIdx] = 0;

        let currentPos = {
            player: playerIndex,
            pit: pitIdx + 1
        };

        let extraTurn = false;
        let captured = false;

        while (seeds > 0) {
            currentPos.pit++;

            if (currentPos.pit > 6) {
                if (currentPos.player === playerIndex) {
                    player.store++;
                    seeds--;

                    if (seeds === 0) {
                        extraTurn = true;
                        console.log(`player ${playerIndex} take another turn`);
                    }

                    currentPos.player = currentPos.player === 1 ? 2 : 1;
                    currentPos.pit = 0;
                } else {
                    currentPos.player = currentPos.player === 1 ? 2 : 1;
                    currentPos.pit = 0;
                }
            } else {
                const currentPlayerObj = currentPos.player === 1 ? this.players[1] : this.players[2];
                currentPlayerObj.pits[currentPos.pit - 1]++;
                seeds--;

                if (seeds === 0 && currentPos.player === playerIndex) {
                    const currentPitCount = currentPlayerObj.pits[currentPos.pit - 1];

                    if (currentPitCount === 1) {
                        const oppositePitIdx = 5 - (currentPos.pit - 1);
                        const oppositeSeeds = opponent.pits[oppositePitIdx];

                        if (oppositeSeeds > 0) {
                            player.store += oppositeSeeds + 1;
                            opponent.pits[oppositePitIdx] = 0;
                            currentPlayerObj.pits[currentPos.pit - 1] = 0;
                            captured = true;
                        }
                    }
                }
            }
        }

        const player1HasSeeds = this.players[1].pits.some(seed => seed > 0);
        const player2HasSeeds = this.players[2].pits.some(seed => seed > 0);

        if (!player1HasSeeds || !player2HasSeeds) {
            this.gameEnded = true;
            if (!player1HasSeeds) {
                const remaining = this.players[2].pits.reduce((sum, seed) => sum + seed, 0);
                this.players[2].store += remaining;
                this.players[2].pits = [0, 0, 0, 0, 0, 0];
            } else {
                const remaining = this.players[1].pits.reduce((sum, seed) => sum + seed, 0);
                this.players[1].store += remaining;
                this.players[1].pits = [0, 0, 0, 0, 0, 0];
            }
        }

        return [
            ...this.players[1].pits,
            this.players[1].store,
            ...this.players[2].pits,
            this.players[2].store
        ];
    }
}

// Export the class directly
module.exports = Ayoayo;