// Abstracción de base de datos (contrato esperado)
class Database {
    save(data) {
      throw new Error("Método no implementado");
    }
}
  
  // Implementación concreta: MySQL
class MySQLDatabase extends Database {
    save(data) {
      console.log("Guardando en MySQL:", data);
    }
  }
  
  // Implementación alternativa: LocalStorage simulada
class LocalDatabase extends Database {
    save(data) {
      console.log("Guardando en almacenamiento local:", data);
    }
  }
  
  // Módulo de alto nivel depende de una abstracción
class UserService {
    constructor(database) {
      this.db = database; // Se inyecta la dependencia
    }
  
    register(user) {
      this.db.save(user);
    }
  }
  
  // Inyección de dependencia (elegimos qué base usar)
  const mysql = new MySQLDatabase();
  const local = new LocalDatabase();
  
  const service1 = new UserService(mysql);
  service1.register({ name: "Ana" });
  
  const service2 = new UserService(local);
  service2.register({ name: "Carlos" });
  