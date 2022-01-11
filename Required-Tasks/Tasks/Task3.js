'use strict'

class Person {
    constructor(firstName, lastName, gender, age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    toString(){
        return `${this._firstName} ${this._lastName}, ${this._age} years old.`;
    }

    get getFName(){
        return this._firstName;
    }
    get getLName(){
        return this._lastName;
    }
    get getGender(){
        return this._gender;
    }
    get getAge(){
        return this._age;
    }


    set setFName(input){
        this._firstName = input;
    }
    set setLName(input){
        this._lastName = input;
    }
    set setGender(input){
        this._gender = input;
    }
    set setAge(input){
        this._age = input;
    }
}

const user1 = new Person("Arman", "Tadevosyan", "female", 22);
console.log(user1.toString()); // Arman Tadevosyan, 22 years old.

console.log(user1.getFName);
console.log(user1.getLName);
console.log(user1.getGender);
console.log(user1.getAge);

user1.setFName = 'Ashot';
user1.setLName = 'Poghosyan';
user1.setGender = 'male';
user1.setAge = 25;

console.log(user1.getFName);
console.log(user1.getLName);
console.log(user1.getGender);
console.log(user1.getAge);


class Student extends Person {
    constructor(firstName, lastName, gender, age, year, fee, program){
        super(firstName, lastName, gender, age);
        this._year = year;
        this._fee = fee;
        this._program = program;
    }

    passExam(programName, grade){
        this._program.forEach(elem=> {
            if (elem.programName === programName){
                elem.grade = grade;
                return;
            }
        });
    }

    isAllPased(){
        this._program.forEach(elem=> {
            if (elem.grade === undefined) return false; 
        });
        this._year += 1;
        return true;
    }

    toString(){
        return `${super.toString()} Fee: ${this._fee}, year: ${this._year}, program: ${this._program}.`;
    }

    get getYear(){
        return this._year;
    }
    get getFee(){
        return this._fee;
    }
    get getProgram(){
        return this._program;
    }

    set setYear(input){
        this._year = input;
    }
    set setFee(input){
        this._fee = input;
    }
    set setProgram(input){
        this._program = input;
    }
}

const programs1 = [
    { programName: "math", grade: 10 },
    { programName: "french", grade: 8 },
    { programName: "english", grade: undefined },
];

const programs2 = [
    { programName: "russian", grade: 10 },
    { programName: "physics", grade: 8 },
    { programName: "german", grade: undefined },
];

const student1 = new Student("Arman", "Tadevosyan", "female", 22, 11, 450000, programs1);
console.log(student1.toString());

console.log(student1.getFName);
console.log(student1.getLName);
console.log(student1.getGender);
console.log(student1.getAge);
console.log(student1.getYear);
console.log(student1.getFee);
console.log(student1.getProgram);

student1.setFName = 'Ashot';
student1.setLName = 'Poghosyan';
student1.setGender = 'male';
student1.setAge = 25;
student1.setYear = 12;
student1.setFee = 550000;
student1.setProgram = programs2;

console.log(student1.getFName);
console.log(student1.getLName);
console.log(student1.getGender);
console.log(student1.getAge);
console.log(student1.getYear);
console.log(student1.getFee);
console.log(student1.getProgram);

student1.passExam('german', 7);
console.log(student1.getProgram);

console.log(student1.getYear);
console.log(student1.isAllPased());
console.log(student1.getYear); 