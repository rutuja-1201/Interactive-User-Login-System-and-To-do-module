const express = require('express');
const app = express();
const cors =require('cors')

app.use(express.json());
app.use(cors());


app.use('/auth', require('./src/routes/authroutes'));
app.use('/todo', require('./src/routes/todoroutes'));
app.use('/user',require('./src/routes/userroutes'))



module.exports = app; 
