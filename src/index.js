const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
