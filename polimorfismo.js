class Pet {
  constructor (name, breed, age, sound) {
    this.name = name
    this.breed = breed
    this.age = age
    this.sound = sound
  }

  doSound () {
    console.log('This function will be sound')
  }
}

class Cat extends Pet {
  doSound () {
    console.log('The sound produce by cat is: ' + this.sound)
  }
}

class Dog extends Pet {
  doSound () {
    console.log('The sound produce by cat is: ' + this.sound)
  }
}

const cat = new Cat('Luna', 'Persa', 10, 'Miau miau')
const dog = new Dog('Farit', 'Cachón', 15, 'Guau guau')
const pet = new Pet()

pet.doSound()
cat.doSound()
dog.doSound()
