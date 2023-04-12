var express = require('express');
var router = express.Router();
var post = require('../models/post') 

router.get('/', async (req,res) => {
  try {
    var results = await post.find({});
    res.status(200)
        .setHeader('Content-Type','application/json')
        .json(results);
  } catch (error) {
    res.status(404)
        .setHeader('Content-Type','application/json')
        .json({'message' : error.message});
  }
})

.post('/', async(req,res) => {
  try {
    var results = await post.create(req.body)
    console.log(results,"hhh")
    res.status(200)
        .setHeader('Content-Type','application/json')
        .json(results);
  } catch (error) {
    res.status(404)
        .setHeader('Content-Type','application/json')
        .json({'message' : error.message});
  }
});

module.exports = router;
