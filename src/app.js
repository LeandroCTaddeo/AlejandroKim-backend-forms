const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const { CLIENT_URL } = require("./config/env");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://alejandrokim.netlify.app"
    ],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "API funcionando correctamente",
  });
});

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;