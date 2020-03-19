const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'frontend/index.html');
const bodyParser = require('body-parser');
const Project = require('./schema/project');
const Contractor = require('./schema/contractor');

mongoose.connect('mongodb://localhost/project_management', {useNewUrlParser: true, useUnifiedTopology: true}).then(
  () => {
    console.log('Connection to db successfully');
  },
  err => {
    console.log(err);
  }
);


app.use(express.static('dist'));
app.use(bodyParser.json());
// app.use((req, res) => res.sendFile(path.resolve(__dirname, 'dist/index.html')));

// Projects
app.get('/v1/projects', (req, res) => {
  Project.find({}, (err, projects) => {
    res.json(projects)
  })
});
app.get('/v1/projects/:id/description', (req, res) => {
  Project.findById(req.params.id,(err, project) => {
    res.json(project)
  })
});
app.post('/v1/projects/create', (req,res) => {
  const projectCreated = new Project({name: 'Project 7', customer: 'Gazprom', date_start: Date.now()});
  projectCreated.save().then(() => {
    res.json(projectCreated);
  })
});

// Contractors
app.get('/v1/contractors', (req, res) => {
  Contractor.find({}, (err, contractors) => {
    res.json(contractors)
  })
});
app.get('/v1/contractors/:id/description', (req, res) => {
  Contractor.findById(req.params.id,(err, contractor) => {
    res.json(contractor)
  })
});
app.post('/v1/contractors/create', (req,res) => {
  const contractorCreated = new Contractor({name: 'GDC'});
  contractorCreated.save().then(() => {
    res.json(contractorCreated);
  })
});

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
});

app.listen(3000, err => {
  if(err) console.log(err);
  else console.log('Running server at port 3000');
});
