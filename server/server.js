const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = "mongodb://localhost:27017/myBlogdb";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

const blogRouter = require("./routes/blogs");

app.use("/blogs", blogRouter);

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
