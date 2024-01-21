// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {

    constructor(title, author, pages) {
        this.title = title,
            this.author = author,
            this.pages = pages;
    }
    displayInfo() {
        console.log(`The title of this book ${this.title} it was written by ${this.author} and in it ${this.pages} pages`)
    }

}

const Book1 = new Book("Shoe Dog", "Phil Knight", 386)
Book1.displayInfo();
const Book2 = new Book("Steve Jobs", "Walter Isaacson", 656)
Book2.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {

    constructor(name, age, grade) {
        this.name = name,
            this.age = age,
            this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, age: ${this.age}, grade: ${this.grade}`)
    }
}
const Student1 = new Student("John Smith", 16, "10th grade")
Student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();

// 3*. Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

class Phonebook {
    contacts = []

    addContact(name, num) {
        let contact = { name: name, number: num }
        this.contacts.push(contact)
    }

    findContactByName(name) {
        const result = this.contacts.find((contact) => contact.name === name)
        return result
    }

    findContactByPhone(num) {
        const result = this.contacts.find((contact) => contact.number === num)
        return result
    }
    showContact() {
        console.log(this.contacts)
    }

    deleteContact(name) {
        const resDeleteContact = this.contacts.filter((contact) => contact.name !== name);
        this.contacts = resDeleteContact
    }

}

let Phonebook1 = new Phonebook();
Phonebook1.showContact()
Phonebook1.addContact("Иванов", "123-45-67");
Phonebook1.addContact("Петров", "987-65-43");
Phonebook1.addContact("Савченко", "834-57-49");
Phonebook1.showContact()
console.log(Phonebook1.findContactByName("Савченко"))
console.log(Phonebook1.findContactByPhone("987-65-43"));
Phonebook1.deleteContact("Петров")
Phonebook1.showContact()