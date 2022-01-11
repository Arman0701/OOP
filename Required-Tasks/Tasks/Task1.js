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

const author1 = new Author('Arman', 'tadevosyan889@gmail.com', 'male');

console.log(author1.getName);
console.log(author1.getEmail);
console.log(author1.getGender);
console.log(author1.toString());