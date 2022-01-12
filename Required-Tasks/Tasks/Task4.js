'use strict'

class Book {
    constructor(title, author){
        this._title = title;
        this._author = author;
    }

    toString(){
        return `Title: ${this._title}, author: ${this._author}.`
    }

    isTheSameBook(book){
        if (book._title !== this._title ||
            book._author !== this._title){
                return false;
        }
        return true;
    }

    get getTitle(){
        return this._title;
    }
    get getAuthor(){
        return this._author;
    }

    set setTitle(input){
        this._title = input;
    }
    set setAuthor(input){
        this._author = input;
    }
}

class LibraryBookBase extends Book {
    constructor(title, author, id){
        super(title, author);
        this._id = id;
    }

    toString(){
        return `Title: ${super._title}, Author: ${super._author}, ID: ${this._id}.`
    }

    get getTitle(){
        return super._title;
    }
    get getAuthor(){
        return super._author;
    }
    get getId(){
        return this._id;
    }
}

class LibraryBook extends LibraryBookBase {
    constructor(title, author, id, quantity){
        super(title, author, id);
        this._quantity = quantity;
    }

    increaseQuantityBy(amount, number){
        this._quantity += Math.floor(amount / number);
        // return this._quantity;
    }

    decreaseQuantityBy(amount, number){
        this._quantity -= Math.floor(amount / number);
        // return this._quantity;
    }

    toString(){
        return `Title: ${super._title}, Author: ${super._author}, ID: ${super._id}, Quantity: ${this._quantity}.`;
    }

    get getTitle(){
        return super._title;
    }
    get getAuthor(){
        return super._author;
    }
    get getId(){
        return super._id;
    }
    get getQuantity(){
        return this._quantity;
    }
    
    set setQuantity(quantity){
        this._quantity = quantity;
    }
}

class ReaderBook extends LibraryBookBase {
    constructor(title, author, id, expirationDate, isReturned){
        super(title, author, id);
        this._expirationDate = expirationDate;
        this.isReturned = isReturned;
    }

    toString(){
        return `Title: ${super._title}, Author: ${super._author}, ID: ${super._id}, Expiration Date: ${this._expirationDate}, is Returned: ${this._isReturned}, `
    }

    get getTitle(){
        return super._title;
    }
    get getAuthor(){
        return super._author;
    }
    get getId(){
        return super._id;
    }
    get getExpirationDate(){
        return this._expirationDate;
    }
    get getIsReturned(){
        return this._isReturned;
    }

    set setExpirationDate(input){
        super._expirationDate = input;
    }
    set setIsReturned(input){
        super._title = input;
    }
}

class Reader {
    constructor(fName, lName, readerId, books){
        this._firstName = fName;
        this._lastName = lName;
        this._readerId = readerId;
        this._books = books;
    }
}