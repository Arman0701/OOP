'use strict'

class Console { 
    constructor(name){
        this.name = name;
        this.hist = [];
    }

    log(...args){
        let list = [];
        for (let i=0; i<args.length; i++){
            if (typeof args[0] === 'string'){
                let spliced = args.splice(1).toString();
                return args[0] + spliced;
            }
            else if (typeof args[i] === 'string'){
                list.push(args[i]);
            }
            else if (typeof args[i] === 'number'){
                list.push(args[i].toString());
            }
            else if (typeof args[i] === 'boolean'){
                list.push(args[i].toString());
            }
            else if (args[i] === null){
                list.push('null');
            }
            else if (typeof args[i] === 'undefined'){
                list.push('undefined');
            }
            else if (args[i] instanceof Array){
                list.push('[' + args[i].toString() + ']');
            }
            else if (typeof args[i] === 'function'){
                list.push(args[i].toString());
            }
            else if (args[i] instanceof Object){
                list.push(JSON.stringify(args[i]));
            }
        }
        this.hist.push(list);
        return list.toString();
    }

    history(){
        return this.hist.reverse();
    }

    clearHistory(){
        this.hist.length = 0;
        return true;
    }
}

const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');

console.log(myConsole.log([1,2,3,4], [5,6,7,8], null, undefined));
console.log(myConsole.log({a: 1, b: 2, c: 3, d: 4}, true, false, 125, 100.3, NaN));
console.log(myConsole.log('ok : ',1,2,3,4));
console.log(myConsole.log(function (){
    this.name = 'Arman';
    this.surname = 'Tadevosyan';
}));

console.log(myConsole.history());

console.log(myConsole.clearHistory());

console.log(myConsole.history());