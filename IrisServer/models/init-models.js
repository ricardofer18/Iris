var DataTypes = require("sequelize").DataTypes;
var _Aireador = require("./Aireador");
var _Laguna = require("./Laguna");
var _Laguna_aireador = require("./Laguna_aireador");
var _Rol = require("./Rol");
var _Usuario = require("./Usuario");

function initModels(sequelize) {
  var Aireador = _Aireador(sequelize, DataTypes);
  var Laguna = _Laguna(sequelize, DataTypes);
  var Laguna_aireador = _Laguna_aireador(sequelize, DataTypes);
  var Rol = _Rol(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  Aireador.belongsToMany(Laguna, { as: 'Laguna_idLaguna_Lagunas', through: Laguna_aireador, foreignKey: "Aireador_idAireador", otherKey: "Laguna_idLaguna" });
  Laguna.belongsToMany(Aireador, { as: 'Aireador_idAireador_Aireadors', through: Laguna_aireador, foreignKey: "Laguna_idLaguna", otherKey: "Aireador_idAireador" });
  Laguna_aireador.belongsTo(Aireador, { as: "Aireador_idAireador_Aireador", foreignKey: "Aireador_idAireador"});
  Aireador.hasMany(Laguna_aireador, { as: "Laguna_aireadors", foreignKey: "Aireador_idAireador"});
  Laguna_aireador.belongsTo(Laguna, { as: "Laguna_idLaguna_Laguna", foreignKey: "Laguna_idLaguna"});
  Laguna.hasMany(Laguna_aireador, { as: "Laguna_aireadors", foreignKey: "Laguna_idLaguna"});
  Usuario.belongsTo(Rol, { as: "Rol_idRol_Rol", foreignKey: "Rol_idRol"});
  Rol.hasMany(Usuario, { as: "Usuarios", foreignKey: "Rol_idRol"});

  return {
    Aireador,
    Laguna,
    Laguna_aireador,
    Rol,
    Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
