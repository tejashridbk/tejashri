const express = require ('express');
const router = express.Router();
const { Category } = require('../sequelize')
const { Subcategory } = require('../sequelize')
const { Product } = require('../sequelize')
const { Enquiry }  = require('../sequelize')
const { Quote }  = require('../sequelize')
const { CreatePO } = require('../sequelize')

//const { CreatePO } = require('../sequelize')
//const { Home } = require('../sequelize')

// const Todo = require('../models/todo');

router.get('/todos', (req, res, next) => {
    // Todo.find({}, 'action')
    //     .then(data => res.json(data))
    //     .catch(next)
});

router.post('/addCategory', (req, res) => {
    if(req.body) {
        Category.create(req.body)
            .then(Category => res.json(Category));
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.post('/addSubcategory', (req, res) => {
    if(req.body) {
        Subcategory.create(req.body)
            .then(Subcategory => res.json(Subcategory));
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.post('/addProduct', (req, res) => {
    if(req.body) {
        Product.create(req.body)
            .then(Product => res.json(Product));
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.post('/addEnquiry',(req, res) => {
    if(req.body) {
        Enquiry.create(req.body)
            .then(Enquiry => res.json(Enquiry));
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
 });

 router.post('/addQuote', (req, res) => {
    if(req.body) {
        Quote.create(req.body)
            .then(Quote => res.json(Quote));
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.post('/addCreatePO', (req, res) => {
    if(req.body) {
        CreatePO.create(req.body)
            .then(CreatePO => res.json(CreatePO));
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});


 router.get('/Category', (req, res) => {
    Category.findAll().then( Category=> res.json(Category));
});

router.get('/Subcategory', (req, res) => {
    Subcategory.findAll({
        include: [
          {
            model: Category,
            as: 'categories'
          }
        ]
      }).then( subcategories => {
          //res.json(Subcategory);      const resObj = users.map(user => {

        //tidy up the user data
        const resObj = subcategories.map(Subcategory => {

        return Object.assign(
            {},
            {
              code: Subcategory.code,
             name: Subcategory.name,
              common_name: Subcategory.common_name,
              gstn: Subcategory.gstn,
              category: {
                name : Subcategory.categories.name,
                //code : Subcategory.categories.code
              }
            }
          )

      });
      res.json(resObj);
    })
      
});

router.get('/Product', (req, res) => {
    Product.findAll().then( Product=> res.json(Product));
});

router.get('/Enquiry', (req, res) => {
    Enquiry.findAll().then( Enquiry=> res.json(Enquiry));
});
router.get('/Quote', (req, res) => {
    Quote.findAll().then( Quote=> res.json(Quote));
});

router.get('/CreatePO', (req, res) => {
    CreatePO.findAll().then( CreatePO=> res.json(CreatePO));
});

router.get('/getEnquiry', (req, res) => {

    Enquiry.findOne({
        where: {id: req.query.enquiryId}
    }).then( Enquiry=> res.json(Enquiry))
});

router.get('/getEnquiries', (req, res) => {

    Enquiry.findOne({
        where: {id: req.query.enquiryId}
    }).then( Enquiry=> res.json(Enquiry))
});

router.get('/Subcat', (req, res) => {
   /* Subcategory.findAll({
        where: {categoryId: req.query.categoryId}
    }).then( Subcategory => res.json(Subcategory)) */

    Subcategory.findAll({
        include: [{
          model: Category,
          as: 'categories',
          where: {id: req.query.categoryId}
        }]
      })
      .then(Subcategory => res.json(Subcategory))
      .catch(console.error)
});



router.delete('/todos/:id', (req, res, next) => {
    // Todo.findOneAndDelete({"_id": req.params.id})
    //     .then(data => res.json(data))
    //     .catch(next)
})

module.exports = router;
