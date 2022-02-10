let obj = {
  name: "",
  address: "",
  age: 0,
};
let handler = {
  set: function (target, property, value, proxy) {
    let keys = Object.keys(target);
    if (!(property in target)) {
      throw new Error(
        `You Try To access a ${property} property That does not Exist`
      );
    }
    if (typeof value !== typeof target[property]) {
      throw new Error(
        `you Try To set a ${property} property with diffrenet Type,expect ${typeof target[
          property
        ]} Type`
      );
    } else {
      if (property === keys[0]) {
        if (value.length !== 7) {
          throw new Error(
            `${property} property Length Must be equal to 7 characters`
          );
        }
      } else if (property === keys[2]) {
        if (value < 25 || value > 60) {
          throw new Error(`${property} Must be between 25 and 60 years`);
        }
      }
    }
    target[property] = value;
  },
  get: function (target, property, proxy) {
    if (!(property in target)) {
      throw new Error(
        `You Try To access a ${property} property That does not Exist`
      );
    }
    return target[property];
  },
};

var proxyObject = new Proxy(obj, handler);
proxyObject.name = "mamdouh";
proxyObject.address = "Cairo, Egypt";
proxyObject.age = 25;
// proxyObject.salary = 1500; // Error
// console.log(proxyObject.salary); // Error
console.log(obj);
