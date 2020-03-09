const express = require('express');
const app = express();
const mongoose = require('mongoose');

const persons = [];
app.get('/', (req,res,next) => {
    res.send('Welcome my friends!');
});
app.get('/person/:id?', (req, res) => {
    var index = req.params.id - 1;
    res.send(persons[index]);
});
app.get('/create',  (req, res) => {
     const person = {
         id: persons.length + 1,
         name: req.query.name,
         age: req.query.age
     };
     persons.push(person);
     res.send(person);

});
app.listen(3000, err => {
    if(err) console.log(err);
    else console.log('Running server at port 3000');
});