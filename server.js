const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost/project_management', {useNewUrlParser: true, useUnifiedTopology: true}).then(
  () => {
    console.log('Connection to db successfully');
  },
  err => {
    console.log(err);
  }
);

app.use(express.static('dist'));
// app.use((req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

app.listen(3000, err => {
  if(err) console.log(err);
  else console.log('Running server at port 3000');
});