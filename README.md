# Ayoayo Game - JavaScript Implementation

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Project Structure](#project-structure)
- [Running the Game](#running-the-game)
- [Testing](#testing)
- [Reflection](#reflection)

## Description

This is a text-based implementation of the traditional African board game Ayoayo (also known as Mancala) written in JavaScript. The game follows all standard rules and includes both basic gameplay and special rules.

## Features

- Complete implementation of Ayoayo game rules
- Text-based interface
- Two-player gameplay
- Proper handling of special rules:
  - Extra turns when last seed lands in player's store
  - Capturing opponent's seeds when last seed lands in empty pit
- Game end detection and winner determination

## Installation

1. Ensure you have Node.js installed (version 12 or higher)
2. Clone this repository or download the files
3. Navigate to the project directory in your terminal

git clone <https://github.com/your-repo/ayoayo-game.git>
cd ayoayo-game

## How to Play

Run the game using Node.js: ```node test.js```

Players take turns selecting pits (1-6) on their side of the board

The game automatically handles seed distribution and special rules

The game ends when one player has no seeds left in their pits

The player with the most seeds in their store wins

## Game Rules

Each player starts with 4 seeds in each of their 6 pits

Players take turns picking up all seeds from one pit

Seeds are distributed counter-clockwise, one in each subsequent pit

If the last seed lands in:

Player's store: they get another turn

An empty pit on player's side: capture opponent's opposite seeds

Game ends when one player has no seeds left in their pits

Remaining seeds go to the opponent's store

Player with the most seeds wins

## Project Structure

```plaintext
AyoayoGame/
├── Ayoayo.js       # Main game logic
├── test.js         # Test/demo file
├── reflection.txt  # Development reflections
└── README.md       # This file

```

### Running the Game

To run the demo game:
bash
```node test.js```

## To create your own game instance

javascript
```const Ayoayo = require('./Ayoayo');```

```const game = new Ayoayo();```

```const player1 = game.createPlayer("Player1");```
```const player2 = game.createPlayer("Player2");```

// Play moves
```game.playGame(1, 3); // Player 1 moves from pit 3```
```game.playGame(2, 4); // Player 2 moves from pit 4```
// Continue playing...

### Testing

The test.js file includes a sample game sequence that demonstrates:

Basic moves

Extra turns

Capture scenarios

Game end conditions

## Reflection

See reflection.txt
