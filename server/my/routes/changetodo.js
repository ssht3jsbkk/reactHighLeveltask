var express = require('express');
var router = express.Router();
var Todo = require('../models/todos.js');


/* PATCH to update specific data in entry and save to database*/
router.patch('/:id', function(req,res,next){
  Todo.findOneAndUpdate(req.params.todosid, (err, todos) =>  {
    if(err) {
      return next(err);
    } else{
      todos.todo = req.body.todo;

      todos.save((err, entry) => {
        if(err){
          return next(err);
        }
        return res.json({payload: entry});
      });
    }
  });
  })

module.exports = router;
