class Person {
  constructor (name, age, height) {
    this.name = name
    this.age = age
    this.height = height
  }

  sayHi () {
    console.log('Hello')
  }
}

class Student extends Person {
  constructor (name, age, height, course, id) {
    super(name, age, height)
    this.course = course
    this.id = id
  }
}

class Employee extends Person {
  zoneWork
  salary

  constructor (name, age, height, salary, zoneWork) {
    super(name, age, height)
    this.salary = salary
    this.zoneWork = zoneWork
  }
}

const student = new Student('Brayan', 20, 180, 'G3', 1)
const employee = new Employee('Brito', 30, 110, 2000, 'Deplopment')

student.sayHi()
employee.sayHi()

console.log('The name of the student is: ' + student.name)
console.log('The name of the employee is: ' + employee.name)
