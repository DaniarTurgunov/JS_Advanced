// Задание 1: ""Управление персоналом компании""
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов

class Employee {
    constructor(name) {
        this.name = name
    }
    displayInfo() {
        console.log(`Имя сотрудника ${this.name}`)
    }
}
class Manager extends Employee {
    constructor(name, departament) {
        super(name)
        this.departament = departament;
    }

    displayInfo() {
        console.log(`Имя сотрудника ${this.name} , отдел ${this.departament}`)
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
        this.totalPrise = 0;
    }
    addProduct(product) {
        this.products.push(product)
    }
    showProducts() {
        console.log(this.products)
    }
    getTotalPrice() {
        for (let value in this.products) {
            this.totalPrise += this.products[value].price;
        }
        return this.totalPrise;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
order.showProducts();
console.log(order.getTotalPrice());

// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

class Productone {
    #name;
    #price;
    #quantity;
    static maxQuantity = 1000;

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity
        if (this.#quantity > Productone.maxQuantity) {
            throw new Error('Quantity is too high');
        }
    }   
    getName(){
        return this.#name
    }
    getPrice(){
        return this.#price
    }
    getQuantity(){
        return this.#quantity
    }

    changePrice(price){
        this.#price = price;
    }
    changeQuantity(quantity){
        this.#quantity = quantity;
    }

    getCost(){
        const result = this.#price * this.#quantity
        return result
    }

}

const product13= new Productone('Тетрадь', 40, 300);
console.log(product13)
console.log(product13.getName()); // "Тетрадь"
console.log(product13.getPrice()); // 50
console.log(product13.getQuantity()); // 200
console.log(product13.getCost()); // 10000
product13.changePrice(80);  
product13.changeQuantity(300); 
console.log(product13.getPrice()); // 80
console.log(product13.getQuantity()); // 300
console.log(product13.getCost());
const product14 = new Productone('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"

// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

class User {
    #name;
    #age;
    #email;
    static maxAge = 120;
    constructor(name,age,email){
        this.#name = name;
        this.#age = age;
        this.#email = email;
        if (this.#age > User.maxAge) {
            throw new Error('Age is too high');
        }
    }
    changeName(name){
        this.#name = name;
    }
    changeAge(age){
        this.#age = age;
    }
    changeEmail(email){
        this.#email = email;
    }
    getName(){
        return this.#name
    }
    getAge(){
        return this.#age
    }
    

}

const user1 = new User('John', 30);
console.log(user1.getName()); // "John"
user1.changeName('Mike');
console.log(user1.getName()); // "Mike"
console.log(User.maxAge); // 120

const user2 = new User('Jane', 150); // Error: Age is too high