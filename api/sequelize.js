const Sequelize = require('sequelize');
const CategoryModel = require('./models/Category');
const SubcategoryModel = require('./models/Subcategory');
const ProductModel = require('./models/Product');
const EnquiryModel = require('./models/Enquiry');
const CreatePOModel = require('./models/CreatePO');
const QuoteModel = require('./models/Quote');

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
const CreatePO = CreatePOModel(sequelize, Sequelize)
const Quote = QuoteModel(sequelize, Sequelize)

Subcategory.belongsTo(Category, {as: 'Category'});
//Subcategory.hasMany(Product);
//Category.hasMany(Subcategory, {as: 'Category'});

Product.belongsTo(Subcategory, {as: 'Subcategory'});
Product.hasMany(Enquiry);
Enquiry.hasMany(Quote);
Quote.hasMany(CreatePO);
//CreatePO.hasMany(Quote);

// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
sequelize.sync({ force: false })
    .then(() => {
      console.log(`Database & tables created!`)
    })

module.exports = {
     Category,
     Subcategory,
     Product,
     Enquiry,
     CreatePO,
     Quote

  };
