// Composición de capacidades

class Eater {
    eat() {
      console.log("Estoy comiendo");
    }
  }
  
class Flyer {
    fly() {
      console.log("Estoy volando");
    }
  }
  
class Swimmer {
    swim() {
      console.log("Estoy nadando");
    }
  }
  
  // Animales con solo las capacidades que necesitan
class Dog {
    constructor() {
      this.eater = new Eater();
      this.swimmer = new Swimmer();
    }
  
    eat() {
      this.eater.eat();
    }
  
    swim() {
      this.swimmer.swim();
    }
  }
  
class Bird {
    constructor() {
      this.eater = new Eater();
      this.flyer = new Flyer();
    }
  
    eat() {
      this.eater.eat();
    }
  
    fly() {
      this.flyer.fly();
    }
  }
  
  // Uso
  const dog = new Dog();
  dog.eat();   // ✅
  dog.swim();  // ✅
  
  const bird = new Bird();
  bird.eat();  // ✅
  bird.fly();  // ✅
  