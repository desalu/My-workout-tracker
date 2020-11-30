const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(data => {
      res.json(data)
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate( params.id, {$push: {exercises: body}}, {new: true})
  .then(data => {
    res.json(data)
  });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
  .then(data => {
    res.json(data)
  });;
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
  .then(data => {
    res.json(data)
  });
});

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id);
});

module.exports = router;