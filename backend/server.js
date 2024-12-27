const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const jobRoutes = require("./routes/jobRoutes");
app.use("/job", jobRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const companyRoutes = require("./routes/companyRoutes");
app.use("/companies", companyRoutes);

const PORT = 3100;

app.use("/static", express.static("public"));

app.use("/files", express.static("images"));

app.use("/company_images", express.static("images"));

const MONGODB_URL =
  "mongodb+srv://ramasamudraphaneesk:yMblVTARd7uBbBgD@webassignment.7wdfi.mongodb.net/?retryWrites=true&w=majority&appName=WebAssignment";
mongoose
  .connect(MONGODB_URL, {})
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

module.exports = app;
