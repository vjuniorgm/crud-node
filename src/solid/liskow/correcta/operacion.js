class Ave {
    walk() {
      console.log("Caminando...");
    }
  }
  
class AveVoladora extends Ave {
    fly() {
      console.log("Volando...");
    }
  }
  
class Pato extends AveVoladora {}

class Avertruz extends Ave {} // No hereda fly()
  
  // Uso
  function moverAve(bird) {
    bird.walk();
  }
  
  function HacerVolar(bird) {
    if (bird instanceof AveVoladora) {
      bird.fly();
    } else {
      console.log("Este pájaro no vuela");
    }
  }
  
  const duck = new Pato();
  const ostrich = new Avertruz();
  
  moveBird(duck);        // ✅
  makeItFly(duck);       // ✅
  
  moveBird(ostrich);     // ✅
  makeItFly(ostrich);    // ✅ sin error
  