//Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let value = prompt("Enter a value from 1 to 100");
let resultStr = "";
let minValue = 1;
let maxValue = 100;

while (value < minValue || value > maxValue || isNaN(value)) {
  value = prompt(
    "You entered not a number or your number is outside the valid number range, please enter a valid number again!"
  );
}

value = Number(value);

for (let i = minValue; i <= maxValue; i++) {
  if (i ** 2 < value) {
    resultStr += i + ", ";
  } else {
    break;
  }
}

if (resultStr !== "") {
  console.log(
    `This is all numbers squares of whose not bigger than ${value}: ${resultStr}`
  );
} else {
  console.log(`There are no numbers whose square does not exceed ${value}.`);
}
