'use strict'

class Shiritori {
    constructor(){
        this.words = [];
        this.gameOver = false;
    }

    play(word){
        if (this.words.length === 0){
            this.words.push(word);
        } else {
            let str = this.words[this.words.length-1];
            str = str.slice(this.words[this.words.length-1].length-1);
            if (str !== word[0] || this.words.includes(word)){
                this.gameOver = true;
                return 'Game is over!';
            } else {
                this.words.push(word);
            }
        }
        return this.words;
    }

    restart(){
        this.words.length = 0;
        this.gameOver = false;
        return "Game restarted!"
    }
}

const game = new Shiritori();

console.log(game.play('arman'));    // [ 'arman' ]
console.log(game.play('namak'));    // [ 'arman', 'namak' ]
console.log(game.play('karkut'));   // [ 'arman', 'namak', 'karkut' ]
console.log(game.play('tari'));     // [ 'arman', 'namak', 'karkut', 'tari' ]
console.log(game.play('qar'));      // Game is over!

console.log(game.words);            // [ 'arman', 'namak', 'karkut', 'tari' ]

console.log(game.restart());        // "Game restarted!"
console.log(game.words);            // []

console.log(game.play("hostess"));  // ["hostess"]
console.log(game.play("stash"));    // ["hostess", "stash"]
console.log(game.play("hostess"));  // 'Game is over!'