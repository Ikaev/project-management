const { Router } = require( 'express' );
const bcrypt = require('bcryptjs');
const router = Router();
const User = require('../models/user');
const HttpError = require('./http_erors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.get('/auth_user', async (req, res) => {
  res.json(req.session.user || false);
});
// router.post('/login', passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//   }, function(username, password, done) {
//     User.findOne({usernameField : username}, function() {
//
//     })
//   }
// )));
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({email});
    if (candidate) {
      const areSame = await bcrypt.compare(password, candidate.password);
      if (areSame) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;
        req.session.save(err => {
          if (err) {
            throw err
          }
          res.json(req.session.user)
        })
      } else {
        throw new HttpError('Неверный пароль ')
      }
    } else {
      throw new HttpError('Пользователь не найден')
    }
  } catch(e) {
    res.status(401).json(e)
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.json(true)
  })
});

router.post('/register', async (req, res) => {
  try {
    const { email, password, firstName, surname, repeat } = req.body;
    const candidate = await User.findOne({email});
    if (candidate) {

    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email, firstName, surname, password: hashPassword
      });
      await user.save();
      res.json('Registration success')
    }
  } catch(e) {
    console.log(e)
  }
})

module.exports = router;