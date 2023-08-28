function sum(arr1, arr2) {
  let numbers = arr1.concat(arr2);
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers);
  if (numbers.length % 2 === 0) {
    let m = numbers.length / 2;
    let k = (numbers[m] + numbers[m - 1]) / 2;
    k = k.toFixed(5);
    console.log(k);
    return k;
  } else {
    if (numbers.length === 1) {
      console.log(numbers[numbers.length - 1]);
      return numbers[numbers.length - 1];
    } else {
      let length = numbers.length / 2;
      length = Math.round(length);
      length = length.toFixed(5);
      console.log(numbers[length - 1]);
      return numbers[length - 1];
    }
  }
}
