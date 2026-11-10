const users = [
    { name: "Viktor", age: 29 },
    { name: "Vasyl", age: 33 },
    { name: "Volodymyr", age: 35 }
];
for (const { name, age } of users) {
    console.log(`Name: ${name}, Age: ${age}`);
}