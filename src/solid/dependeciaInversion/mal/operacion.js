class MySQLDatabase {
    save(data) {
      console.log("Guardando en MySQL:", data);
    }
}
  
class UserService {
    constructor() {
    this.db = new MySQLDatabase(); // ❌ Depende directamente de una implementación
}

  
  
register(user) {
      this.db.save(user);
 }
}
  
  const service = new UserService();
  service.register({ name: "Ana" });
  