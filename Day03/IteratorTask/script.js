var obj = {
  name: "Amr",
  address: "Cairo, Egypt",
  age: 25,
};

obj[Symbol.iterator] = function () {
  let index = 0;
  let keys = Object.keys(this);
  let values = Object.values(this);
  // let pairs = Object.entries(this)
  return {
    next: function () {
      if (index >= keys.length) {
        //   if (index > pairs.length) {
        return {
          value: undefined,
          done: true,
        };
      } else {
        return {
          value: [keys[index], values[index++]],
          //   value: pairs[index++],
          done: false,
        };
      }
    },
  };
};

console.log(...obj);
for (const iterator of obj) {
  console.log(iterator);
}
