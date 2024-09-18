const { mongoose } = require('./mongoose');

// Define the meal schema
const mealSchema = new mongoose.Schema({
  // Your work starts here
  name: { type: String, required: true, unique: true },
  timeOfDay: { type: String, enum: ["Breakfast", "Lunch", "Dinner"], required: true },
  mealType: { type: String, enum: ["FOOD", "DRINK"], required: true },
  imageUrl: { type: String, required: true },
});

// Define the plan schema
const planSchema = new mongoose.Schema({
  meals: {
    type: [mealSchema],
    required: true,
  },
  // Your work starts here
  name: {
    type: String,
    required: true,
    unique: true,
  }
});

// Create the plan model, REPLACE <sid> WITH YOUR STUDENT ID
const Plan = mongoose.model('s3979348', planSchema);

module.exports = Plan;
