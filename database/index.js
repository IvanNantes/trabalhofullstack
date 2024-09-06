const Sequelize = require('sequelize')
const config = require('../config/database')

const Endereco = require('../models/pessoa')

const connection = new Sequelize(config)

module.exports = connection;