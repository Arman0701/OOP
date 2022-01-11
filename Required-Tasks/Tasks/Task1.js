'use strict'

class Author {
    constructor(name, email, gender){
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get getName (){
        return this._name;
    }

    get getEmail (){
        return this._email;
    }

    get getGender (){
        return this._gender;
    }

    toString(){
        return `${this._name}, ${this._email}, ${this._gender}`;
    }
}

class Book {
    constructor(title, author, price, quantity){
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    getProfit(){
        return this._price * this._quantity;
    }

    toString(){
        return `${this._title}, ${this._author}, ${this._price}, ${this._quantity}`
    }

    set setTitle (input){
        this._title = input; 
    }
    set setAuthor (input){
        this._author = input; 
    }
    set setPrice (input){
        this._price = input; 
    }
    set setQuantity (input){
        this._quantity = input; 
    }

    get getTitle(){
        return this._title;
    }
    get getAuthor(){
        return this._author.toString();
    }
    get getPrice(){
        return this._price;
    }
    get getQuantity(){
        return this._quantity;
    }
}

const author1 = new Author('Arman', 'tadevosyan889@gmail.com', 'male');
const otherAuthor = new Author('Jack', 'jack1234@gmail.com', 'male');

console.log(author1.getName);
console.log(author1.getEmail);
console.log(author1.getGender);
console.log(author1.toString());

const book1 = new Book('Da Vinci Code', author1, 250, 752);

console.log(book1.getTitle);
console.log(book1.getAuthor);
console.log(book1.getPrice);
console.log(book1.getQuantity);

book1.setTitle = 'Harry Potter and the Deathly Hallows';
book1.setAuthor = otherAuthor;
book1.setPrice = 200;
book1.setQuantity = 1253;

console.log(book1.getTitle);
console.log(book1.getAuthor);
console.log(book1.getPrice);
console.log(book1.getQuantity);

console.log(book1.getProfit());
console.log(book1.toString());