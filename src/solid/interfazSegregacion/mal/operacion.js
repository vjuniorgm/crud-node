// Interfaz grande (implícita)
class Animal {
    eat() {
      console.log("Estoy comiendo");
    }
  
    fly() {
      console.log("Estoy volando");
    }
  
    swim() {
      console.log("Estoy nadando");
    }
  }
  
  class Dog extends Animal {
    fly() {
      // ⚠️ Este método no tiene sentido para un perro
      throw new Error("Un perro no puede volar");
    }
  
    swim() {
      console.log("Estoy nadando");
    }
  }
  
  const dog = new Dog();
  dog.eat();  // ✅
  dog.fly();  // ❌ Error innecesario
  