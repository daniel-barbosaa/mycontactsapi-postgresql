const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("./app/middlewares/cors");
const errorHandler = require("./app/middlewares/errorHandler");

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3000, () =>
  console.log("🔥🔥🔥Server started at http://localhost:3000")
);
