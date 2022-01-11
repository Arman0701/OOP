# Classes

## Tasks
---
### CoffeeShop

Properties:
* name: a string (basically, of the shop)
* menu: an array of items (of object type), with each item containing the item (name of the item), type
(whether food or a drink) and price.
* orders: an empty array

Methods:
* addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
* fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
* listOrders: returns the list of orders taken, otherwise, an empty array.
* dueAmount: returns the total amount due for the orders taken.
* cheapestItem: returns the name of the cheapest item on the menu.
* drinksOnly: returns only the item names of type drink from the menu.
* foodOnly: returns only the item names of type food from the menu.
* __IMPORTANT__: Orders are fulfilled in a FIFO (first-in, first-out) order.

Examples:
```javascript
tcs.addOrder("hot cocoa"); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea"); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
tcs.addOrder("cinnamon roll"); // "Order added!"
tcs.addOrder("iced coffee"); // "Order added!"
tcs.listOrders; // ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
tcs.dueAmount(); // 2.17
tcs.fulfillOrder(); // "The cinnamon roll is ready!"
tcs.fulfillOrder(); // "The iced coffee is ready!"
tcs.fulfillOrder(); // "All orders have been fulfilled!"
// all orders have been presumably served
tcs.listOrders(); // []
// an empty array is returned if all orders have been exhausted
tcs.dueAmount(); // 0.0

// no new orders taken, expect a zero payable
tcs.cheapestItem(); // "lemonade"
tcs.drinksOnly(); // ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly(); // ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"];
```
[Solution](https://github.com/Arman0701/OOP/blob/master/Required-Tasks/CLass-Tasks/Coffee-shop.js)

---

### Shiritori
This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:
* First character of next word must match last character of previous word.
* The word must not have already been said.

Below is an example of a Shiritori game:
```javascript
["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid!
["motive", "beach"]; // invalid! - beach should start with "e"
["hive", "eh", "hive"]; // invalid! - "hive" has already been said
```

Write a Shiritori class that has two instance properties:
* words: an array of words already said.
* game_over: a boolean that is true if the game is over.

    Methods:

    * play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).
        * If it is valid, it adds the word to the words array, and returns the words array.
        * If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.
    * restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted".

Examples:
```javascript
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
```

__IMPORTANT__ Words cannot have already been said.
* The play method should not add an invalid word to the words array.
* You don't need to worry about capitalization or white spaces for the inputs for the play method. There will only be single inputs for the play method.

[Solution](https://github.com/Arman0701/OOP/blob/master/Required-Tasks/CLass-Tasks/Shiritori.js)

---

### CustomConsole Class

Create a CustomConsole class with following methods:
* log function that takes user arguments and returns them as a string,
* history function that takes an optional range as an argument,
* clearHistory function to remove the history memory.
---
* The log function has no limit of arguments.

Examples:
```javascript
const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');
myConsole.log([0, 1, 2, 3]) // "Regular: [0,1,2,3]"
myConsole.log({ a:1, b:2 }) // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3) ➞ "ok : 1, 2, 3"
myConsole.clearHistory() // true
myConsole.history() // ""
```

[Solution](https://github.com/Arman0701/OOP/blob/master/Required-Tasks/CLass-Tasks/Console.js)

---

# Literature

### Read all chapters with all tasks
[MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
[JS Info](https://javascript.info/classes)
[CSS Tricks](https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/)
[Medium](https://betterprogramming.pub/object-oriented-programming-in-javascript-b3bda28d3e81)