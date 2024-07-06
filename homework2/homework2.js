//Task 1
function rsp(p1, p2) {
  let result = "The winner is ";
  if (p1 === p2) {
    return "It'a draw";
  } else if (p1 === "rock" && p2 === "paper") {
    return result + "p2";
  } else if (p1 === "rock" && p2 === "scissors") {
    return result + "p1";
  } else if (p1 === "paper" && p2 === "scissors") {
    return result + "p2";
  } else if (p1 === "paper" && p2 === "rock") {
    return result + "p1";
  } else if (p1 === "scissors" && p2 === "paper") {
    return result + "p1";
  } else if (p1 === "scissors" && p2 === "rock") {
    return result + "p2";
  }
  return "wrong imput";
}
//Task 2
function calculator(a, b, operator) {
  switch (operator) {
    case "/":
      if (b === 0) {
        return "error division by zero";
      }
      return a / b;
    case "*":
      return a * b;
    case "-":
      return a - b;
    case "+":
      return a + b;
  }
  return "wrong input";
}
//Task 3
const convertTemperature = (value, scale) => {
  return scale === "C" ? (value - 32) / 1.8 : value * 1.8 + 32;
};
//Taks 4
const isAdult = (age) =>
  isNaN(age)
    ? "Invalid input: Age must be a number."
    : Number(age) >= 18
    ? true
    : false;

// Task 5
function calculateBMI(weight, height) {
  if (isNaN(weight)) {
    return "Invalid input: weight must be a number";
  } else if (isNaN(height)) {
    return "Invalid input: height must be a number";
  }
  if (Number(weight) < 0) {
    return "Invalid input: weight must be a positive number.";
  } else if (Number(height) < 0) {
    return "Invalid input: height must be a positive number.";
  }
  return weight / height ** 2;
}
//Task 6
const calculateDiscount = (price, discount) => {
  if (isNaN(price)) {
    return "Invalid input: Price and discount must be valid numbers, and discount must be between 0 and 100.";
  } else if (isNaN(discount)) {
    return "Invalid input: Discount and discount must be valid numbers, and discount must be between 0 and 100. ";
  } else if (Number(price) > 100 || Number(discount) > 100) {
    return "Invalid input: Price and discount must be valid numbers, and discount must be between 0 and 100";
  }
  return price - (price * discount) / 100;
};
//Task 1
const checkAge = (age) =>
  age < 13
    ? "Child"
    : age >= 13 && age <= 19
    ? "Teen"
    : age >= 20 && age <= 59
    ? "Adult"
    : "Senior";

// Task 2
// ktpi '1' vorovhetev arachi paymany stugeluc talua true ev stanalua '1'

//Task 3
//ktpi false vorovhetev and(&&) - jamanak srugelua nayi berchi paymany andi false-a kta false or-i jamnak nayelua !hasId qani vor jxtum enq true-n kdarna false

//Task 4
// ktpi true vorovhetev arachi stugacy talua true 2-y false or-i jamanak bavakana mihat true lini da kvekali

//Taks 5
// ktpi '3' vorovhetev arachi paymany kta false erkrordnel stugeluc talua false

//Task 6
//ktpi true vorovhetev arachi paymany kta fasle bayc erkrordy true or-nel kveradardzni true-n
