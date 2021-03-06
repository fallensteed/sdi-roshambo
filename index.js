const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/yargs');
const argv = yargs(hideBin(process.argv)).argv;

class Game{
    constructor(player, computer){
        this.player = player,
        this.computer = computer
    }
    runGame(){
        if (this.player === this.computer) {
            return '~The game is a tie.~';
        } else if((this.player === 'rock' && this.computer === 'paper') || (this.player === 'paper' && this.computer === 'scissors') || (this.player === 'scissors' && this.computer === 'rock')){
            return '~Computer wins.~';
        } else {
            return '~Player wins.~';
        }
    }
}

class Player{
    constructor(selection){
        this.selection = selection;
    }
    test(){
        if(this.selection !== 'rock' && this.selection !== 'paper' && this.selection !== 'scissors'){
            return false;
        } else {
            return true;
        }
    }
}

class Computer{
    constructor(){
        this.choices = ['rock', 'paper', 'scissors'];
        this.selection = '';
    }
    engage(){
        this.selection = this.choices[(Math.floor(Math.random() * (3 - 0)) + 0)];
        return `Computer plays ${this.selection}!`;
    }
}

console.log('Playing a game of Roshambo against the computer.');
let selection = argv.move;
const player = new Player(selection);
const computer = new Computer();
if(player.test()){
    console.log(`Player plays ${player.selection}!`);
    console.log(computer.engage());
    const theGame = new Game(player.selection, computer.selection);
    console.log(theGame.runGame());
} else {
    console.log('You must enter "Rock", "Paper", or "Scissors" to play!');
}