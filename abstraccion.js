class GeometryFigures {
  area () {}
  perimeter () {}
}

class Rectangle extends GeometryFigures {
  constructor (base, height) {
    super()
    this.base = base
    this.height = height
  }

  area () {
    return this.base * this.height
  }

  perimeter () {
    return (this.base * 2) + (this.height * 2)
  }
}

class Triangle extends GeometryFigures {
  constructor (base, height, sides) {
    super()
    this.base = base
    this.height = height
    this.sides = sides
  }

  area () {
    return (this.base * this.height) / 2
  }

  perimeter () {
    return this.sides.reduce((a, b) => a + b)
  }
}

const rectangle = new Rectangle(2, 5)
const triangle = new Triangle(2, 5, [1, 1, 1])
console.log(rectangle.area())
console.log(triangle.area())
