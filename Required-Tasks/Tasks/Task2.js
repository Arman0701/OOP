'use strict'

class Account {
    constructor(id, name, balance){
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    credit(amount){
        this._balance += amount;
        return this._balance;
    }

    debit(amount){
        if (this._balance < amount){
            return "Amount exceeded balance.";
        }
        this._balance -= amount;
        return this._balance;
    }

    transferTo(otherAcc, amount){
        this.debit(amount);
        otherAcc._balance += amount;
        return this._balance;
    }

    identifyAccounts(accFirst, accSecond){
        if (accFirst._id !== accSecond._id ||
            accFirst._name !== accSecond._name ||
            accFirst._balance !== accSecond._balance){
                return false;
        }
        return true;
    }

    toString(){
        return `id: ${this._id}, name: ${this._name}, balance: ${this._balance}`;
    }

    get getId(){
        return this._id;
    }
    get getName(){
        return this._name;
    }
    get getBalance(){
        return this._balance;
    }

    set setId(id){
        this._id = id;
    }
    set setName(name){
        this._name = name;
    }
    set setBalance(balance){
        this._balance = balance;
    }
}

const acc1 = new Account('213598413', 'Arman', 2000);
const acc2 = new Account('649516461', 'Harut', 5000);

console.log(acc1.credit(2000)); // balance: 4000
console.log(acc1.debit(1000));  // balance: 3000
console.log(acc1.transferTo(acc2, 1000)); // balance: 2000
console.log(acc1.identifyAccounts(acc1, acc2)); // false
console.log(acc1.identifyAccounts(acc1, acc1)); // true
console.log(acc1.toString());

console.log(acc1.getId);
console.log(acc1.getName);
console.log(acc1.getBalance);

acc1.setId = '351616516';
acc1.setName = 'Hakob';
acc1.setBalance = 10000;

console.log(acc1.getId);
console.log(acc1.getName);
console.log(acc1.getBalance);
