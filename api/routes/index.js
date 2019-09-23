const express = require ('express');
const router = express.Router();
const { Category } = require('../sequelize')


// const Todo = require('../models/todo');

router.get('/todos', (req, res, next) => {
    // Todo.find({}, 'action')
    //     .then(data => res.json(data))
    //     .catch(next)
});

router.post('/addCategory', (req, res) => {
    console.log(req.body);
    if(req.body){
        const data = {
            code: req.body.code,
        }
        Category.create(req.body)
            .then(category => res.json(category));
    }else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/todos/:id', (req, res, next) => {
    // Todo.findOneAndDelete({"_id": req.params.id})
    //     .then(data => res.json(data))
    //     .catch(next)
})

module.exports = router;
