const express = require("express");

const itemRouter = require("./routes/itemRoutes");

const app = express();

// 1) MIDDLEWARES

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

// 3) ROUTES
app.use("/api/v1/items", itemRouter);

module.exports = app;
