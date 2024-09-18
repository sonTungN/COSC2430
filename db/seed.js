// Seed data for the meal plans
const plans = [
  {
    name: 'Daily Meal Plan #1',
    meals: [
      {
        name: 'Banana Pancakes',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl:
          'https://source.unsplash.com/800x600/?banana,pancakes',
      },
      {
        name: 'Iced Coffee',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://source.unsplash.com/800x600/?coffee,ice',
      },
      {
        name: 'Grilled Chicken Salad',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl:
          'https://source.unsplash.com/800x600/?chicken,salad',
      },
    ],
  },
  {
    name: 'Daily Meal Plan #2',
    meals: [
      {
        name: 'Avocado Toast',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl:
          'https://source.unsplash.com/800x600/?avocado,toast',
      },
      {
        name: 'Mango Lassi',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://source.unsplash.com/800x600/?mango,lassi',
      },
      {
        name: 'Pesto Pasta',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl: 'https://source.unsplash.com/800x600/?pesto,pasta',
      },
    ],
  },
  {
    name: 'Daily Meal Plan #3',
    meals: [
      {
        name: 'Blueberry Pancakes',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl:
          'https://source.unsplash.com/800x600/?blueberry,pancakes',
      },
      {
        name: 'Matcha Latte',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://source.unsplash.com/800x600/?matcha,latte',
      },
      {
        name: 'Stir-Fry Vegetables with Tofu',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl:
          'https://source.unsplash.com/800x600/?stir-fry,tofu',
      },
    ],
  },
  {
    name: 'Daily Meal Plan #4',
    meals: [
      {
        name: 'Omelette',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl: 'https://source.unsplash.com/800x600/?omelette',
      },
      {
        name: 'Strawberry Smoothie',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl:
          'https://source.unsplash.com/800x600/?strawberry,smoothie',
      },
      {
        name: 'Grilled Cheese Sandwich',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl:
          'https://source.unsplash.com/800x600/?grilled,cheese',
      },
    ],
  },
  {
    name: 'Daily Meal Plan #5',
    meals: [
      {
        name: 'Bagel and Cream Cheese',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl:
          'https://source.unsplash.com/800x600/?bagel,cream-cheese',
      },
      {
        name: 'Orange Juice',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://source.unsplash.com/800x600/?orange,juice',
      },
      {
        name: 'Tuna Salad',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl: 'https://source.unsplash.com/800x600/?tuna,salad',
      },
    ],
  },
];

const Plan = require('./planModel');

// Delete the collection if it exists
Plan.collection
  .drop()
  .then(() => {
    console.log('Current plans are removed!');

    // Then insert data
    Plan.insertMany(plans)
      .then(() => {
        console.log('New plans are saved!');
        process.exit();
      })
      .catch((error) => console.log(error.message));
  })
  .catch(() => console.log('Collection does not exist, so not'));
