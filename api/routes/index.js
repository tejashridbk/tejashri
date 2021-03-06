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
            as: 'Category',
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
              Category: {
                name : Subcategory.Category.name,
                //code : Subcategory.categories.code
              }
            }
          )

      });
      res.json(resObj);
    })
      
});

router.get('/products', (req, res) => {
    //Product.findAll().then( Product=> res.json(Product));
    Product.findAll({
        include: [
          {
            model: Subcategory,
            as: 'Subcategory',
            include: [
                {
                    model: Category,
                    as: 'Category',
                }
            ]
           
          }
        ]
      }).then( products => {
          //res.json(Subcategory);      const resObj = users.map(user => {
        
        //tidy up the user data
        const resObj = products.map(Product => {
        return Object.assign(
            {},
            {
            //  code: Product.code,
             code: Product.code,
              name: Product.name,
                gstn: Product.gstn,
                flange1: Product.flange1,
                flange2: Product.flange2,               
                flange3: Product.flange3,
                weight_per_meter: Product. weight_per_meter,
                thickness:  Product.thickness ,
                width:  Product.width,
                length:  Product.length,
                description:  Product.description,
                common_name: Product.common_name,
                grade_specs:  Product.grade_specs,
                brandname:  Product.brandname,
                outer_diameter:  Product.outer_diameter,
                total:  Product.total,
               /* Subcategory: {
                    name : Product.Subcategory.name,
                    Category: {
                        name:Subcategory.Category.name
                    }
                    //code : Subcategory.categories.code
                  } */
                subcategories: products.subcategories.map(Subcategory => {
                    return Object.assign(
                      {},
                      {
                        name: Subcategory.name,
                        categories: Subcategory.categories.map(Category => {
                          return Object.assign(
                            {},
                               {
                                name : Category.name,
                        //code : Subcategory.categories.code
                         })
                          })
                          
                      })
       
            
                } )
     })
      
    });
    //console.log(resObj); 
    res.json(resObj);  
});
});

router.get('/Enquiry', (req, res) => {
    Enquiry.findAll().then( Enquiry=> res.json(Enquiry));

    /*Enquiry.findAll({
        include: [
          {
            model: Product,
            as: 'Product',
          }
        ]
      }).then( enquiries => {
          //res.json(Subcategory);      const resObj = users.map(user => {

        //tidy up the user data
        const resObj = enquiries.map(Enquiry => {

        return Object.assign(
            {},
            {
             // partyname: Enquiry.partyname,
              address: Enquiry.address,
              phone: Enquiry.phone,
              emailid: Enquiry.emailid,
              partyname: Enquiry.partyname,
              partyaddress: Enquiry.partyaddress,
              quantity: Enquiry.quantity,
              date: Enquiry.date,
              category: Enquiry.category,
              subcategory: Enquiry.subcategory,
              size: Enquiry.size,
              quantity_no: Enquiry.quantity_no,
              quantity_kg: Enquiry.quantity_kg,
              total: Enquiry.total,
              Product: {
                name : Enquiry.Product.name,
                //code : Subcategory.categories.code
              }
            }
          )

      });
      res.json(resObj);
      console.log(resObj);
    })*/
      
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
          as: 'Category',
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
