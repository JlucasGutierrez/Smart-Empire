const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Phone", {
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});
}
