class House {
  #number
  #code

  constructor (number, code) {
    this.#number = number
    this.#code = code
  }

  get getNumber () {
    return this.#number
  }

  set setNumber (number) {
    this.#number = number
  }

  get getCode () {
    return this.#code
  }

  set setCode (code) {
    this.#code = code
  }
}

const house = new House('12', '203')

house.setNumber = 2
console.log(house.getNumber)
console.log(house.getCode)
