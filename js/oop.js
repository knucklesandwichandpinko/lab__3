const output = document.getElementById('output');
const output2 = document.getElementById('output2');

// Step 1a: Create a new object using a regular function
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greetings = function () {
        alert(`Hello! I am ${this.name}`);
    };
    return obj;
}

// Step 1b: Create new persons using the function and invoke the greetings method
var person1 = createNewPerson("Eldhose Ben");
var person2 = createNewPerson("Joe Smith");

// Step 2a: Use a constructor function for the Person object
class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.name = {
            "firstName": firstName,
            "lastName": lastName,
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = function () {
            return `The interests of ${this.name.firstName} ${this.name.lastName} of age ${this.age} of gender ${this.gender} are ${this.interests}.`;
        };
        this.greetings = function () {
            alert(`Hello! I am ${this.name.firstName} ${this.name.lastName}`);
        };
    }
}

// Step 2b: Create instances of Person using the constructor and invoke the greetings method
var person3 = new Person("Eldhose", "Ben", 32, "Male", ["Swimming", "Hiking"]);
var person4 = new Person("Joe", "Smith", 25, "Male", ["Painting", "Music"]);
person3.greetings();
person4.greetings();

// Step 3c: Access properties and methods of person1 using the console
console.log(person1.name);
console.log(person3.age);        // Access the age property
console.log(person3.bio()); 
  // Access the name property
  console.log(person2.name)
  console.log(person4.age);        // Access the age property
console.log(person4.bio());
person1.greetings();      // Invoke the greetings method

// Access properties and methods of person3 created using the Person constructor


// Step 4a: Create an object 'car' using the Object() constructor
var car = new Object();

// Step 4b: Add properties and methods to 'car'
car.brand = "Honda";
car.color = "White";
car.price = 50000;
car.fun = function () {
    alert(`This is a fun car!`);
};

// Step 4c: Change properties of 'car' in the console and invoke the fun() method
car.color = "Red";
car.fun();

// Step 5a: Create another object 'anotherCar' based on 'car' using Object.create()
var anotherCar = Object.create(car);

// Step 5b: Output the 'brand' property of 'anotherCar'
console.log(anotherCar.brand);

// Step 6: Create a hamburger object function
function createHamburger(options) {
    return {
        bun: options.bun || "Regular Bun",
        toppings: options.toppings || [],
        patty: options.patty || "Beef Patty",
        pattiesCount: options.pattiesCount || 1,
        description: function () {
            return `A ${this.pattiesCount}-patty ${this.patty} burger on a ${this.bun} with ${this.toppings.join(', ')} toppings.`;
        }
    };
}

// Step 7: Create a hamburger
var myHamburger = createHamburger({
    bun: "Whole Wheat Bun",
    toppings: ["Lettuce", "Tomato", "Cheese"],
    patty: "Chicken Patty",
    pattiesCount: 2
});

// Step 8: Output the description of the hamburger to output2
output2.textContent = myHamburger.description();
