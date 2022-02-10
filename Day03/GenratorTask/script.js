function* genFibonacciSeries(maxValue) {
    let n1 = 0, n2 = 1;
  while (n2 <= maxValue) {
      yield n2;
      [n1, n2] = [n2, n1 + n2];
  }
}

var iterator = genFibonacciSeries(8);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* genFibSeries(numberOfValues) {
  let n1 = 0,
    n2 = 1;
  if (numberOfValues == 0) {
    return;
  } else {
    for (let index = 0; index < numberOfValues; index++) {
      yield n2;
      [n1, n2] = [n2, n1 + n2];
    }
  }
}

var iterator2 = genFibSeries(6);
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
