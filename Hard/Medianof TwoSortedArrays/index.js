function sum(arr1, arr2) {
  let numbers = arr1.concat(arr2);
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  if (numbers.length % 2 === 0) {
    let m = numbers.length / 2;
    let k = (numbers[m] + numbers[m - 1]) / 2;
    k = k.toFixed(5);
    return k;
  } else {
    if (numbers.length === 1) {
      return numbers[numbers.length - 1];
    } else {
      let length = numbers.length / 2;
      length = Math.round(length);
      length = length.toFixed(5);
      return numbers[length - 1];
    }
  }
}
