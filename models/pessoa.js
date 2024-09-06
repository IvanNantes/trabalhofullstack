const { DataTypes, Model } = require('sequelize');
const conexao = require('../config/database');

module.exports = (sequelize) => { 
  class pessoa extends Model {}

  pessoa.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      CPF: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'CPF',

      },
      Nome: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Nome',

      },      
      Telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Telefone',

      },
    },
    {
      sequelize, 
      modelName: 'pessoa',
      tableName: 'pessoas',
      timestamps: false,
    }
  );

  return pessoa;
};