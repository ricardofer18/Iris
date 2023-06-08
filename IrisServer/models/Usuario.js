const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nombreCompleto: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Rol_idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Rol',
        key: 'idRol'
      }
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
          { name: "Rol_idRol" },
        ]
      },
      {
        name: "fk_Usuario_Rol_idx",
        using: "BTREE",
        fields: [
          { name: "Rol_idRol" },
        ]
      },
    ]
  });
};
