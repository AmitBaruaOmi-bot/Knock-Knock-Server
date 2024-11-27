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
app.use("/auth", userRoutes);

// const authRoutes = require("./routes/auth.routes.js");
// app.use("/api", authRoutes);

const foodDataRoutes = require("./routes/food.data.routes.js");
app.use("/food", foodDataRoutes);

const orderDataRoutes = require("./routes/order.data.routes.js");
app.use("/order", orderDataRoutes);

// const foodCategoryRoutes = require("./routes/food.category.routes.js");
// app.use("/category", foodCategoryRoutes);

// const restaurantDataRoutes = require("./routes/restaurant.data.routes.js");
// app.use("/restaurant", restaurantDataRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
