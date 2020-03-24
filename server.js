const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const User = require('./models/user');

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'frontend/index.html');
const bodyParser = require('body-parser');

// Routers
const projectRoutes = require('./routes/projects');
const contractorRoutes = require('./routes/contractors');

app.use(async (req, res, next) => {
  try {
    const user = await User.findById('5e79dd784b7c9e1a27c516e7');
    req.user = user;
    next();
  } catch(e) {
    console.log(e);
  }
});

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/v1/projects', projectRoutes);
app.use('/v1/contractors', contractorRoutes);




app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
});

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const url = 'mongodb://localhost/project_management';
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    const candidate = await User.findOne();
    if(!candidate) {
      const user = new User({
        email: 'ikaev.purgen@gmail.com',
        name: 'Evgeniy'
      })
      await user.save();
    }
    app.listen(PORT, err => {
      if(err) console.log(err);
      else console.log(`Server is running on port ${PORT}`);
    });
  } catch(error) {
    console.log(error)
  }
}
start();

