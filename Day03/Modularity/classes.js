class Shape {
  calculateArea() {}
  calculateParameters() {}
}

export class Rectangle extends Shape {
  constructor(width, height) {
    if (arguments.length < 2) {
      throw new Error("Please Enter Width and Height");
    } else {
      super();
      this.width = width;
      this.height = height;
    }
  }
  calculateArea() {
    return this.width * this.height;
  }
  calculateParameters() {
    return 0.5 * this.width * this.height;
  }
  toString() {
    return `Rectangle Width: ${this.width}, Height: ${
      this.height
    }, Area : ${this.calculateArea()} , Parameters : ${this.calculateParameters()}`;
  }
}

export class Square extends Shape {
  _numberOfSides = 4;
  constructor(height) {
    if (arguments.length < 1) {
      throw new Error("Please Height");
    } else {
      super();
      this.height = height;
    }
  }
  calculateArea() {
    return this.height * this.height;
  }
  calculateParameters() {
    return this.height * this._numberOfSides;
  }
  toString() {
    return `Square Width: ${this.height}, Height: ${
      this.height
    }, Area : ${this.calculateArea()} , Parameters : ${this.calculateParameters()}`;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    if (arguments.length < 1) {
      throw new Error("Please Enter Radius");
    } else {
      super();
      this.radius = radius;
    }
  }
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  calculateParameters() {
    return 2 * Math.PI * this.radius;
  }
  toString() {
    return `Circle Radius: ${
      this.radius
    }, Area : ${this.calculateArea()} , Parameters : ${this.calculateParameters()}`;
  }
}
