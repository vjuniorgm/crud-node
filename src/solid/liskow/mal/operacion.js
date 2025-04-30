class Ave {
    fly() {
      console.log("Estoy volando");
    }
  }
  
class Pato extends Ave {}
  
class Avertruz extends Ave {
    fly() {
      throw new Error("¡No puedo volar!");
    }
  }
  
  // Uso
  function hacerVolar(bird) {
    bird.fly();
  }
  
  const duck = new Pato();
  const ostrich = new Avertruz();
  
  hacerVolar(duck);     // ✅ Funciona
  hacerVolar(ostrich);  // ❌ Error en tiempo de ejecución
  