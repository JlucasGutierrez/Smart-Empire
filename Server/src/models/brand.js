const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Brand", {
  // Define los campos del modelo
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Asegura que el nombre de la marca sea único
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true // El país puede ser opcional
  },
  yearFounded: {
    type: DataTypes.INTEGER,
    allowNull: true // El año de fundación puede ser opcional
  }
});
}
