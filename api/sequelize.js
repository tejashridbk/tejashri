const Sequelize = require('sequelize');
const CategoryModel = require('./models/Category');
const SubcategoryModel = require('./models/Subcategory');
const ProductModel = require('./models/Product');
const EnquiryModel = require('./models/Enquiry');
const CreatePOModel = require('./models/CreatePO');
const QuoteModel = require('./models/Quote');
const EnquiryproductModel = require('./models/Enquiryproduct');

const sequelize = new Sequelize('aspen1', 'root', 'tejufcbk', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Category = CategoryModel(sequelize, Sequelize);
const Subcategory = SubcategoryModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Enquiry = EnquiryModel(sequelize, Sequelize);
const CreatePO = CreatePOModel(sequelize, Sequelize);
const Quote = QuoteModel(sequelize, Sequelize);
const Enquiryproduct = EnquiryproductModel(sequelize, Sequelize);


Subcategory.belongsTo(Category, {as: 'Category'});
//Subcategory.hasMany(Product);
//Category.hasMany(Subcategory, {as: 'Category'});

Product.belongsTo(Subcategory, {as: 'Subcategory'});
//Enquiry.belongsTo(Product,{as: 'Product'});
Enquiry.hasMany(Quote);
Quote.hasMany(CreatePO);
//CreatePO.hasMany(Quote);
//Enquiryproduct.belongsTo(Enquiry, { foreignKey: 'EnquiryId', targetKey: 'EnquiryId', as: 'Enquiry' });
//Enquiryproduct.belongsTo(Product, { foreignKey: 'ProductId', targetKey: 'ProductId', as: 'Product' })

//Enquiry.belongsToMany(Product, { as: 'ProductInEnquiry', through: models.Enquiryproduct, foreignKey: 'EnquiryId'});
//Product.belongsToMany(Enquiry, { as: 'EnquiryInProduct', through: models.Enquiryproduct, foreignKey: 'ProductId'});
//Enquiryproduct.associate = (models) => {
  Enquiryproduct.belongsTo(Enquiry, { foreignKey: 'EnquiryId' });
  Enquiryproduct.belongsTo(Product, { foreignKey: 'ProductId' });

//};
//Enquiry.associate = (models) => {
  //Enquiry.belongsToMany(Product, { through: Enquiryproduct, foreignKey: 'EnquiryId'});

//};
//Product.associate = (models) => {
  Product.belongsToMany(Enquiry, { through: Enquiryproduct, foreignKey: 'ProductId'});

//};

sequelize.sync({ force: false })
    .then(() => {
      console.log(`Database & tables created!`)
    })

module.exports = {
     Category,
     Subcategory,
     Product,
     Enquiry,
     Enquiryproduct,
     CreatePO,
     Quote,
     

  };
