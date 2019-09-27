const express = require ('express');
const router = express.Router();
const { Category } = require('../sequelize')
const { Subcategory } = require('../sequelize')
const { Product } = require('../sequelize')
const { Enquiry }  = require('../sequelize')

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

 router.get('/category', (req, res) => {
    Category.findAll().then(Category => res.json(Category));
});

router.delete('/todos/:id', (req, res, next) => {
    // Todo.findOneAndDelete({"_id": req.params.id})
    //     .then(data => res.json(data))
    //     .catch(next)
})

module.exports = router;
