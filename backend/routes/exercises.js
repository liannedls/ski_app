const router = require('express').Router();
const { resetWarningCache } = require('prop-types');
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  var num = parseInt(req.query.num)
  console.log(typeof num);
  Exercise.find({group : req.query.group}).limit(num)
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const num = req.body.num;
  const group = req.body.group;
  const skill = req.body.skill;
  const age = req.body.age;

  const newExercise = new Exercise({
    name,
    num,
    group,
    skill,
    age,
  });
  
  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.name = req.body.name;
      exercise.num = req.body.num;
      exercise.group = req.body.group;
      exercise.skill = req.body.skill;
      exercise.age = req.body.age;

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;