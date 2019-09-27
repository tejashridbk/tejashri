const Sequelize = require('sequelize');
const CategoryModel = require('./models/Category');
const SubcategoryModel = require('./models/Subcategory');
const ProductModel = require('./models/Product');
const EnquiryModel = require('./models/Enquiry');

const sequelize = new Sequelize('aspen1', 'root', 'tejufcbk', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Category = CategoryModel(sequelize, Sequelize);
const Subcategory = SubcategoryModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize)
const Enquiry = EnquiryModel(sequelize, Sequelize)

Category.hasMany(Subcategory);
//Category.hasMany(Product);
Subcategory.hasMany(Product);
Product.hasMany(Enquiry);
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
sequelize.sync({ force: true })
    .then(() => {
      console.log(`Database & tables created!`)
    })

module.exports = {
     Category,
     Subcategory,
     Product,
     Enquiry
     
  };
