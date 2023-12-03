var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const passport = require("passport");
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/register", function (req, res) {
  let createdman = new userModel({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname,
  });

  userModel.register(createdman, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/profile");
    });
  });
  // res.send(createdman);
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  function (req, res) {}
);

// router.get("/logout", function (req, res) {
//   req.logout(); // Corrected: calling logout on the req object
//   res.redirect("/");
// });
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

router.get("/profile", isLoggedIn, function (req, res, next) {
  res.render("profile");
});

router.get('/login',function(req, res, next){
  res.render('login')
})

router.get('/feed',function(req, res, next){
  res.render('feed')
})

module.exports = router;
