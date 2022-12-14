require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;
const cors = require("cors");

const userRouter = require("./Routers/user");

const marianResourcesRouter = require("./Routers/marianResources");
const PostRouter = require("./Routers/community");
const EventRouter = require("./Routers/event");
const ReportRouter = require('./Routers/reports/ReportRoute');



app.use(cors());
app.use(express.json());

//! connect to mongoDB
mongoose.connect(URL, (err) => {
  if (err) throw err;
  console.log("connected to MongoDB");
});

app.use("/api/user", userRouter); //user login & Registration
app.use("/api/marianResources", marianResourcesRouter); //marianResources
app.use("/api/post", PostRouter);
app.use("/api/event", EventRouter);
app.use('/api/reports', ReportRouter);


//! create server with port number
app.listen(process.env.PORT || "0.0.0.0", () => {
  console.log(`service is up and running on port ${PORT}`);
});

module.exports = app;
