const express = require('express');
const Plan = require("../db/planModel");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const mealName = req.query.name;
    if(!mealName) {
      res.status(400).json({ error: 'Missing name' });
    }

    const allPlans = await Plan.find();
    const allMeals = allPlans.flatMap(plan => plan.meals);
    const matchedMeal = allMeals.find(meal => meal.name === mealName);

    if (!matchedMeal) {
      return res.status(404).json({ error: 'Meal not found' });
    }

    res.render("meal", {
      currentMeal: matchedMeal,
    });
  } catch(e) {
    next(e);
  }
});

module.exports = router;
