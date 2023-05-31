const sequelize = require('./sequelize')

sequelize.sync({ alter: process.env.NODE_ENV === 'production' ? false : true })