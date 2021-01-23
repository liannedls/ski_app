const router = require('express').Router();
const { resetWarningCache } = require('prop-types');
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  num = parseInt(req.query.num)
  console.log(num);
  console.log(req.query.group)
  if(req.query.age ==='Any' && req.query.group ==='All'){
    Exercise.aggregate([ { $match: {skill: req.query.skill}}, { $sample: { size : num } }])
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  }
  if(req.query.age !=='Any' && req.query.group =='All'){
    if(req.query.age ==='Adult'){
      Exercise.aggregate([ { $match: {age: { $ne: 'Children'}, skill: req.query.skill}}, { $sample: { size : num } }])
      .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
    }    
    if(req.query.age ==='Children'){
      Exercise.aggregate([ { $match: {age: { $ne: 'Adult'}, skill: req.query.skill}}, { $sample: { size : num } }])
      .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  }
  if(req.query.age =='Any' && req.query.group !=='All'){
      console.log("gets here")
      if(req.query.group ==='Group'){
        console.log("gets here too")
      Exercise.aggregate([ { $match: {group: { $ne: 'Private'}, skill: req.query.skill}}, { $sample: { size : num } }])
      .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
    }    
    if(req.query.group ==='Private'){
      Exercise.aggregate([ { $match: {group: { $ne: 'Group'},skill: req.query.skill}}, { $sample: { size : num } }])
      .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  }  
  if(req.query.age !=='Any' && req.query.group !=='All'){
    if(req.query.group ==='Group' && req.query.age ==='Adult'){
      console.log("gets here too")
    Exercise.aggregate([ { $match: {age: { $ne: 'Children'}, group: { $ne: 'Private'}, skill: req.query.skill}}, { $sample: { size : num } }])
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  }    
  if(req.query.group ==='Private' && req.query.age ==='Adult'){
    Exercise.aggregate([ { $match: {age: { $ne: 'Children'}, group: { $ne: 'Group'},skill: req.query.skill}}, { $sample: { size : num } }])
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  }
  if(req.query.group ==='Group' && req.query.age ==='Children'){
    Exercise.aggregate([ { $match: {age: { $ne: 'Adult'}, group: { $ne: 'Private'},skill: req.query.skill}}, { $sample: { size : num } }])
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  }
  if(req.query.group ==='Private' && req.query.age ==='Children'){
    Exercise.aggregate([ { $match: {age: { $ne: 'Adult'}, group: { $ne: 'Group'},skill: req.query.skill}}, { $sample: { size : num } }])
    .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  }
}
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