const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const Project = require('./schema/project');

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

app.get('/projects', (req, res) => {
  Project.find({}, (err, projects) => {
    res.json(projects)
  })
});

app.get('/projects/:id', (req, res) => {
  Project.findById(req.params.id,(err, project) => {
    res.json(project)
  })
});
app.post('/projects/create', (req,res) => {
  const projectVal = new Project({name: 'Project 4', customer: 'Livingcore'});
  projectVal.save().then(() => {
    res.json(projectVal);
  })
});



app.listen(3000, err => {
  if(err) console.log(err);
  else console.log('Running server at port 3000');
});