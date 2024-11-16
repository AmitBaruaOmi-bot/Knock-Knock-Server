// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db/index.js");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes.js");
app.use("/api", indexRoutes);

const userRoutes = require("./routes/user.routes.js");
app.use("/api", userRoutes);

const authRoutes = require("./routes/auth.routes.js");
app.use("/auth", authRoutes);

const foodDataRoutes = require("./routes/food.data.routes.js");
app.use("/", foodDataRoutes);

const foodCategoryRoutes = require("./routes/food.category.routes.js");
app.use("/", foodCategoryRoutes);

const restaurantDataRoutes = require("./routes/restaurant.data.routes.js");
app.use("/", restaurantDataRoutes);

const foodOptionsRoutes = require("./routes/food.options.routes.js");
app.use("/", foodOptionsRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
