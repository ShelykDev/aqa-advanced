const person = {
    firstName: "Pavlo",
    lastName: "Melnyk",
    age: 20,
};
person.email = "melnyk@example.com";
delete person.age;
console.log(person);