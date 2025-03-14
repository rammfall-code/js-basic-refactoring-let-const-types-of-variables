function getNumber(message) {
  let number;

  do {
    number = prompt(message);

    if (number === null) {
      break;
    }
  } while (number === '' || isNaN(number));

  return +number;
}

let sum = 0;

const firstNumber = getNumber('Enter first number');

sum += firstNumber;

const secondNumber = getNumber('Enter second number');

sum += secondNumber;

alert(`Your sum is ${sum}`);
