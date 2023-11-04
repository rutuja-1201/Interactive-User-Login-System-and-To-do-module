const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = require('./app')
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost/todo-system', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

