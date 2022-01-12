# Tasks

## Required Tasks
Note, setters in all tasks should do some validations
### Task 1

Create an Author class and a Book class.
Author should have:
* fields
* name
* email
* gender

Methods:
* getters for fields
* toString()

Book should have:
* fields
* title
* author(Author)
* price
* quantity
* methods
* getters for fields
* setters for fields
* getProfit() - which calculates the profit from the book based on the price and quantity.
* toString()

Example
```javascript
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
```
[Solution](https://github.com/Arman0701/OOP/blob/master/Required-Tasks/Tasks/Task1.js)

---

### Task 2

Create an Account class. Account should have:
* fields
    * id
    * name
    * balance

* getters for fields
* setters - for name and balance
* credit(amount) - which should add amount to balance and return the updated balance.
* debit(amount) - which should subtract the amount from the balance, if amount is less than the
* balance, otherwise output “Amount exceeded balance.”
* transferTo(anotherAccount, amount) - which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output "Amount exceeded balance."
* __static__ method: identifyAccounts(accountFirst, accountSecond) - which gets two
* accounts and identifies if they are the same or not comparing all fields.
* toString()

Example:
```javascript
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
```

[Solution](https://github.com/Arman0701/OOP/blob/master/Required-Tasks/Tasks/Task2.js)

---

### Task 3
Write classes: Person class and Student class. Person should have:
* fields
    * firstName
    * lastName
    * gender
    * age
* methods
    * getters for fields
    * setters for fields
    * toString()

Example:
```javascript
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.
```

Student is inherited from Person. It should have
* fields
    * year
    * fee
    * program(array of { programName, grade })
* methods
    * getters for fields
    * setters for fields
    * passExam(programName, grade)
    * isAllPassed()
    * toString()

Student should contain the data about its programs and exams.
* passExam will update that data, so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
* It should have a method isAllPassed().

Example of program array:
```javascript
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
```

[Solution](https://github.com/Arman0701/OOP/blob/master/Required-Tasks/Tasks/Task3.js)

---

### Task 4
Describe a model of a library. For that define classes: Library, Reader, Book.

To create correct hierarchies and connections, you should have a subclasses of Book such as LibraryBookBase, LibraryBook, ReaderBook.

Book should have:

* fields
    * title string
    * author string
* methods
    * getters for fields
    * toString()
    * isTheSameBook(book) - which returns true if the book title and author is the same with the current instance, false, otherwise.

LibraryBookBase should have:
* fields
    * title - string
    * author - string
    * bookId - number
* methods
    * getters for fields
    * toString()

LibraryBook should have:

* fields
    * title - string
    * author - string
    * bookId - number
    * quantity - number
* methods
    * getters for fields
    * setters for appropriate fields
    * toString()
    * increaseQuantityBy(amount - number) - increases the quantity of the book by the given amount.
    * decreaseQuantityBy(amount - number) - decrease the quantity of the book by the given amount.

ReaderBook should have:

* fields
    * title - string
    * author - string
    * bookId - number
    * expirationDate - string
    * isReturned - boolean
* methods
    * getters for fields
    * setters for appropriate fields
    * toString()

Reader should have:

* fields
    * firstName - string
    * lastName - string
    * readerId - number
    * books - Array of ReaderBook
* methods
    * getters for fields
    * setters for appropriate fields
    * toString()
    * borrowBook(book - Book, library - Library) - requests a book from the library. If returned book is not a null and is a type of ReaderBook, pushes it to the books.

Library should have:

* fields
    * books - Array of LibraryBook
    * readers - Array of Readers
* methods
    * getters for fields
    * doHaveBook(requestedBook - Book) - returns true if library has the book, false otherwise.
    * addBook(newBook - Book) - add new book to the library. If the book already exists, increases its quantity, otherwise adds new book of type LibraryBook.
    * addBooks(newBooks) - add new books to the library with the same logic as the addBook. Returns changed array of the books.
    * checkReaderId(readerId) - returns true if there exist a reader with the given id, otherwise returns false.
    * lendBook(book - Book, readeId) - checks whether the book exists and there is at least  one at the library. Checks whether library has a reader with the given id. If the both are true, returns a book of type ReaderBook.


# Literature
[Classes](https://javascript.info/classes)
[OOP in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
[OOP in JavaScript](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)