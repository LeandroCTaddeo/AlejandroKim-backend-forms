const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Submission = sequelize.define(
  "Submission",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombreCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    barrioComuna: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profesionActividad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contacto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactoFuturo: {
      type: DataTypes.ENUM("si", "no", "prefiero pensarlo"),
      allowNull: false,
    },
  },
  {
    tableName: "submissions",
    timestamps: true,
  }
);

module.exports = Submission;