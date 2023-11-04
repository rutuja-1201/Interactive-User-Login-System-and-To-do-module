const express = require('express');
const app = express();
const cors =require('cors')

app.use(express.json());
app.use(cors());


app.use('/api/auth', require('./src/routes/authroutes'));
app.use('/api/todo', require('./src/routes/todoroutes'));
app.use('api/user',require('./src/routes/userroutes'))

app.use((err, req, res, next) => {
  
});

module.exports = app; 
