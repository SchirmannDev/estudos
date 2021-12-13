const rectangle = {};
Object.defineProperty(rectangle, "x", {
  set(x) {
    if (x > 0) {
      this._x = x;
    } else {
      console.log("numero invalido");
    }
  },
}),
  Object.defineProperty(rectangle, "y", {
    set(y) {
      if (y > 0) {
        this._y = y;
      } else {
        console.log("NUMERO INVALIDO");
      }
    },
  });

Object.defineProperty(rectangle, "area", {
  get() {
    return this._x * this._y;
  },
});

rectangle.x = -10;
rectangle.y = -4;

console.log(rectangle.area);

// utilizando object.defineProperty
