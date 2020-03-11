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
app.route('/project')
  .get((req,res) => {
    Project.findById('5e6913a66f20b71a48254c98', (err, project) => {
      res.json(project)
    })
})
  .post((req, res) => {
    res.send(JSON.stringify(req.body));
})
  .put((req, res) => {

})
// app.get('/project/create', (req,res) => {
//   const projectVal = new Project({_id:new mongoose.Types.ObjectId(), name: 'Project 4', customer: 'Livingcore'});
//   projectVal.save().then(() => {
//     res.json(projectVal);
//   })
// });



app.listen(3000, err => {
  if(err) console.log(err);
  else console.log('Running server at port 3000');
});