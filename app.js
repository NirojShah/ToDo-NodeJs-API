const express = require("express");
const taskRouter = require("./routes/taskRoutes1");

// app instance
let app = express()

// in-built middleware to process incoming json data
app.use(express.json())

app.use("/app/v1/tasks", taskRouter)

module.exports = app;