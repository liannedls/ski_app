const router = require('express').Router();
const { resetWarningCache } = require('prop-types');
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  num = parseInt(req.query.num)
  console.log(num);
  //Exercise.find({group : req.query.group}).limit(num)
  if(req.query.group == "All" ){
    Exercise.aggregate([ { $match: {age: req.query.age, skill: req.query.skill } } , { $sample: { size : num } }])
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  }
  else{
    Exercise.aggregate([ { $match: {group: req.query.group, age: req.query.age, skill: req.query.skill } } , { $sample: { size : num } }])
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  
}
});

router.route('/all').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));  
});

module.exports = router;