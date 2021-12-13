const rectangle = {
  set x(x) {
    if (x > 0) {
      this._x = x;
    } else {
      console.log("numero invalido");
    }
  },
  set y(y) {
    if (y > 0) {
      this._y = y;
    } else {
      console.log("numero invalido");
    }
  },
  get area() {
    return this._x * this._y;
  },
};
rectangle.x = -10;
rectangle.y = -5;

console.log(rectangle.area);

// utilizando gettere setter para tratamento de erros
