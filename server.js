const express = require('express');
const path = require('path');
const csrf = require('csurf');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongodb-session')(session);
const app = express();
const MONGODB_URI = 'mongodb://localhost/project_management';
const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI
});

const varMiddleware = require('./middleware/variables');

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'frontend/index.html');
const bodyParser = require('body-parser');

// Routers
const projectRoutes = require('./routes/projects');
const contractorRoutes = require('./routes/contractors');
const authRoutes = require('./routes/auth');

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'some secret value',
  resave: false,
  saveUninitialized: false,
  store
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(csrf());
app.use(flash());
app.use(varMiddleware);

app.use('/v1/projects', projectRoutes);
app.use('/v1/contractors', contractorRoutes);
app.use('/v1/auth', authRoutes);

app.all('*', (req, res) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.sendFile(HTML_FILE)
});

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    app.listen(PORT, err => {
      if(err) console.log(err);
      else console.log(`Server is running on port ${PORT}`);
    });
  } catch(error) {
    console.log(error)
  }
}
start();

