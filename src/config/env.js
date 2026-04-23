require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || 5432,
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
};