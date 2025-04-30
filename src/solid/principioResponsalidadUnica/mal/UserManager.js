// userManager.js

class UserManager {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    saveToFile() {
      const fs = require('fs');
      fs.writeFileSync('users.json', JSON.stringify(this.users));
    }
  
    sendWelcomeEmail(user) {
      console.log(`Enviando email a ${user.email}`);
    }
  }
  
  const manager = new UserManager();
  const newUser = { name: "Ana", email: "ana@example.com" };
  manager.addUser(newUser);
  manager.saveToFile();
  manager.sendWelcomeEmail(newUser);
  