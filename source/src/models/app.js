const express = require("express");
require("../database/connection.js");
const path = require("path");
const hbs = require("hbs");
const app = express();
const User = require("./usercomments");
// const User = require("./usercomments");
const Booking = require("./usercomments");
const port = process.env.PORT || 8008;

const staticpath = path.join(__dirname, "../../public");
const Templatepath = path.join(__dirname, "../../templets/views"); // Assuming your views are in "templets/views"
const PartialPath = path.join(__dirname, "../../templets/partials");

// Static files middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));

// To set the views engine
app.set("view engine", "hbs");
app.set("views", Templatepath);
hbs.registerPartials(PartialPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: req.query.name,
  });
});

app.get("/service", (req, res) => {
  res.render("service", {
    name: req.query.name,
  });
});

app.get("/menu", (req, res) => {
  res.render("menu", {
    name: req.query.name,
  });
});

app.get("/booking", (req, res) => {
  res.render("booking", {
    name: req.query.name,
  });
});

app.get("/team", (req, res) => {
  res.render("team", {
    name: req.query.name,
  });
});

app.get("/testimonial", (req, res) => {
  res.render("testimonial", {
    name: req.query.name,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    name: req.query.name,
  });
});

app.post("/contact", async (req, res) => {
  try {
    // res.send(req.body);
    const UserData = new User(req.body);
    await UserData.save();
    res.status(201).render("contact")
    // res.send('<script>alert("Successfully registered!Now you can log in :)"); window.location.href = "../../templets/views/index.hbs";</script>')
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/booking", async (req, res) => {
  try {
    const UserBooking = new Booking(req.body);
    await UserBooking.save();
    res.status(201).render("booking")
    // res.send('<script>alert("Successfully registered!Now you can log in :)"); window.location.href = "../../templets/views/index.hbs";</script>')
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.get('/templets/views/index.hbs',(req,res)=>{
//       // const {user}=req.session;
//       // console.log(user)
//       return res.render('index')

  
// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
