const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Laguna', {
    idLaguna: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    laguna: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idOd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idORP: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Laguna',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idLaguna" },
        ]
      },
    ]
  });
};
