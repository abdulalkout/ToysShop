require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const toysData = require("./models/toysData");
const allToysData = require("./models/allToysData");
const allusers = require("./models/users");
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
  res.render("HomePage");
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
    console.log(req.body);
    console.log(createToy);
    res.redirect("/toys");
  });
});

app.post("/", (req, res) => {
  if (req.body.admin === "on") {
    req.body.admin = true;
  } else {
    req.body.admin = false;
  }
  allusers.create(req.body, (err, newUser) => {
    console.log(newUser);
    console.log(req.body);
    res.redirect("/");
  });
});

app.get("/toys/:id/edit", (req, res) => {
  allToysData.findById(req.params.id, (err, foundToy) => {
    res.render("EditToy", { toy: foundToy });
  });
});

app.put("/toys/:id", (req, res) => {
  // if(req.body.comments.lenght >0){
  //   const updatedtoy = {
  //     name: req.body.name,
  //     img: req.body.img,
  //     price: req.body.price,
  //     discription: req.body.discription,
  //     comments: req.body,
  //   }
  // }
  allToysData.findByIdAndUpdate(req.params.id, req.body, (err, updatedToy) => {
    console.log("after update", updatedToy);
    res.redirect(`/toys`);
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
app.listen(3001, (req, res) => {
  console.log("working on port 3001");
});
