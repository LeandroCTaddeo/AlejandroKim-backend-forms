const { sequelize } = require("../models");

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL exitosa");

    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados correctamente");
  } catch (error) {
    console.error("Error al conectar o sincronizar la base de datos:", error);
    throw error;
  }
};

module.exports = syncDatabase;