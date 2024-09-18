const homeRouter = require("./home");
const mealRouter = require("./meal");

function route(app) {
  app.use("/meal", mealRouter)

  app.use("/", homeRouter);
}

module.exports = route;
