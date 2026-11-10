const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

const car2 = {
  brand: "Tesla",
  model: "Model S",
  owner: "Elon Musk",
};

const car3 = { ...car1, ...car2 };

console.log(car3);