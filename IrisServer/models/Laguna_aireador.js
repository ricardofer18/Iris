const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Laguna_aireador', {
    idLaguna_aireador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Laguna_idLaguna: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Laguna',
        key: 'idLaguna'
      }
    },
    Aireador_idAireador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Aireador',
        key: 'idAireador'
      }
    }
  }, {
    sequelize,
    tableName: 'Laguna_aireador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idLaguna_aireador" },
          { name: "Laguna_idLaguna" },
          { name: "Aireador_idAireador" },
        ]
      },
      {
        name: "fk_Laguna_aireador_Laguna1_idx",
        using: "BTREE",
        fields: [
          { name: "Laguna_idLaguna" },
        ]
      },
      {
        name: "fk_Laguna_aireador_Aireador1_idx",
        using: "BTREE",
        fields: [
          { name: "Aireador_idAireador" },
        ]
      },
    ]
  });
};
