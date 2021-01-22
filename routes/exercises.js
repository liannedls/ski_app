const router = require('express').Router();
const { resetWarningCache } = require('prop-types');
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  num = parseInt(req.query.num)
  console.log(num);
  console.log(req.query.age)
  Exercise.aggregate([ { $match: {$or: [{age: req.query.age, skill: req.query.skill, group: req.query.group},{age: "Any", skill: req.query.skill, group: req.query.group}, {age: req.query.age, skill: req.query.skill, group: "All"}, {age: "Any", skill: req.query.skill, group: req.query.group}]}} , { $sample: { size : num } }])
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/all').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));  
});

router.route('/mylist').get((req, res) => {
  console.log(req.query.id)
  Exercise.findById({_id : req.query.id})
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) => {
  console.log(req.query.text)
  Exercise.find( { $text: { $search: req.query.text } } )
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;