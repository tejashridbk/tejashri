const Sequelize = require('sequelize');
const CategoryModel = require('./models/Category');

const sequelize = new Sequelize('aspen_sales', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Category = CategoryModel(sequelize, Sequelize)
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs

sequelize.sync({ force: true })
    .then(() => {
      console.log(`Database & tables created!`)
    })

module.exports = {
    Category,
};
