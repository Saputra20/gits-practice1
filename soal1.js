let numbers = [1, 0, 0, 1, 0, 1, 1];

function soal1(numbers = []) {
  let counter = 0;
  let result = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element == 0) {
      counter = 0;
    } else {
      counter++;
      result = Math.max(result, counter);
    }
  }

  return console.log(result);
}

soal1(numbers);
