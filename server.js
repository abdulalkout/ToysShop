require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const toysData = require("./models/toysData");
const allToysData = require("./models/allToysData");
const methodOverride = require("method-override");
//----------------------------------------------------{MiddleWare}
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  next();
});

// ---------------------------------------------------{Routes}

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><br/><a href='/toys'>check all toys</a>");
});

app.get("/toys", (req, res) => {
  allToysData.find({}, (err, allToysData) => {
    res.render("ToysPage", { toys: allToysData });
  });
});

app.get("/toys/newToy", (req, res) => {
  res.render("NewToy");
});

app.post("/toys", (req, res) => {
  allToysData.create(req.body, (err, createToy) => {
    // console.log(req.body);
    // console.log(createToy);
    res.redirect("/toys");
  });
});

app.get("/toys/:id/edit", (req, res) => {
  allToysData.findById(req.params.id, (err, foundToy) => {
    res.render("EditToy", { toy: foundToy });
  });
});

app.put("/toys/:id", (req, res) => {
  allToysData.findByIdAndUpdate(req.params.id, req.body, (err, updatedToy) => {
    console.log(updatedToy);
    res.redirect(`/toys/${updatedToy._id}`);
  });
});

app.delete("/toys/:id", (req, res) => {
  allToysData.findByIdAndRemove(req.params.id, (err, data) => {
    // console.log(data);
    res.redirect("/toys");
  });
});

app.get("/toys/:id", (req, res) => {
  allToysData.findById(req.params.id, (err, foundToy) => {
    res.render("ToysDisplay", {
      toy: foundToy,
    });
  });
});

//==Port==//
app.listen(3000, (req, res) => {
  console.log("working on port 3000");
});
