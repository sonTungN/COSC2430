const express = require('express');
const router = express.Router();

const Plan = require("../db/planModel");

router.post("/refresh", async (req, res, next) => {
  try {
    const totalPlan = await Plan.countDocuments();
    const randomPlanIndex = Math.floor(Math.random() * totalPlan) + 1;

    const matchedPlan = await Plan.findOne({ name: "Daily Meal Plan #" + randomPlanIndex });

    res.render("index", {
      plan: matchedPlan,
      meals: matchedPlan.meals,
    });

    // res.redirect("/");

  } catch(e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const planName = "Daily Meal Plan #1";
    const matchedPlan = await Plan.findOne({ name: planName });

    if(!matchedPlan) {
      res.json({ message: "No plan name found" });
    }

    res.render("index", {
      plan: matchedPlan,
      meals: matchedPlan.meals,
    });

  } catch(e) {
    next(e);
  }
});

module.exports = router;
