const output = document.getElementById('output');

// Step 1: Create an object named "person"
var person = {
    name: {
        firstName: "Eldhose",
        lastName: "Ben",
    },
    age: 24,
    gender: "Male",
    address: {
        streetNo: 100,
        streetName: "Carlton Road",
        city: "Barrie",
    },
    interests: ["eating", "sleeping", "drawing"],
    greetings: function () {
        alert(`Hello! I am ${this.name.firstName} ${this.name.lastName}`);
    },
    bio: function () {
        return `The interests of ${this.name.firstName} ${this.name.lastName} of age ${this.age} of gender ${this.gender} are ${this.interests}.`;
    }
};

// Step 3: Add a "greeting" method to the object
person.greeting = function () {
    alert(`Hello! I am ${this.name.firstName} ${this.name.lastName}`);
};

// Step 5a: Access and display name, age, and gender in the <p> element
output.textContent = `Name: ${person.name.firstName} ${person.name.lastName}, Age: ${person.age}, Gender: ${person.gender}`;

// Step 5b: Update the bio() function to return the string
output.textContent = person.bio();

// Step 6a: Include a "name" sub-namespace within the object
// You should also update the "greetings" and "bio" functions to use this sub-namespace

person.name = {
    firstName: "NewFirstName",
    lastName: "NewLastName",
};

person.greetings = function () {
    alert(`Hello! I am ${this.name.firstName} ${this.name.lastName}`);
};

person.bio = function () {
    return `The interests of ${this.name.firstName} ${this.name.lastName} of age ${this.age} of gender ${this.gender} are ${this.interests}.`;
};

// Step 7: You can use bracket notation to access object properties
// This is similar to using dot notation
output.textContent = person["name"]["firstName"];
output.textContent = person["age"];

// Step 8: Change the person's name and age
person.name.firstName = "Robb";
person.age = 80;

// Step 9a: Add a new member "eyes" and access it
person["eyes"] = "green";
output.textContent = person["eyes"];

// Step 9b: Add a new function "goodbye" to the person object
person.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
};

// Step 11a and 11b: Create two new objects with "hello" function
var person1 = {
    name: "Person1",
    hello: function () {
        alert(`Hello! I am ${this.name}`);
    },
}

var person2 = {
    name: "Person2",
    hello: function () {
        alert(`Hello! I am ${this.name}`);
    },
}

// Example of using objects: "myString" is an instance of the String class
let myString = 'Words, words, words.';
const elem = document.getElementById('output'); // Access the Document object

// Output the person object to the console
console.log(person);
