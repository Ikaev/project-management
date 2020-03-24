const { Router } = require( 'express' );
const router = Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  const user = await User.findById('5e79dd784b7c9e1a27c516e7');
  req.session.user = user;
  req.session.isAuthenticated = true
  req.session.save(err => {
    if (err) {
      throw err
    }
    res.redirect('/')
  })
});

router.get('/logout', async (req, res) => {
  req.session.destroy(() => {

  })
});

module.exports = router;