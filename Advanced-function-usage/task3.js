function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Обидва аргументи мають бути числами");
  }

  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }

  return numerator / denominator;
}


// Коректний виклик
try {
  console.log(divide(10, 2));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("work is done");
}

// denominator дорівнює 0
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("work is done");
}

// numerator не є числом
try {
  console.log(divide("abc", 5));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("work is done");
}

// denominator не є числом
try {
  console.log(divide(10, "2"));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("work is done");
}