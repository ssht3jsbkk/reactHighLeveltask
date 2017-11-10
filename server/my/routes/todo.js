var express = require('express');
var router = express.Router();
var Todo = require('../models/todos.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  Todo.find((err, todos) => {
    if(err){
      return next(err);
    }
    return res.json({payload: todos});
  })
});

/* POST to list database. */
router.post('/', function(req, res, next) {
  const todo = new Todo(req.body);
  todo.save((err, entry) => {
    if(err){
      return next(err);
    }
    return res.json({payload: entry});
  })
});


module.exports = router;
