const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use(routes);

const userService = new UserService();
const fileService = new FileService();
const emailService = new EmailService();

const newUser = { name: "Ana", email: "ana@example.com" };
userService.addUser(newUser);

fileService.saveToFile(userService.getAllUsers(), 'users.json');
emailService.sendWelcomeEmail(newUser);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


