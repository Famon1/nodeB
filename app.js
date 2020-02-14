const express = require('express');
const mongooseDB = require('mongoose');
const expressHB = require('express-handlebars');
const todoRoutes = require('./routes/todos');
const path = require('path')

const PORT = process.env.PORT || 3000;




const app = express();
const hbs = expressHB.create({
  defaultLayoyt: 'main',
  extname: 'hbs'
})

app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');
app.set('views','views');

app.use(todoRoutes);

async function start() {
  try{
    await mongooseDB.connect('mongodb://localhost:27017/test',{
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    app.listen(PORT,'localhost', function() {
      console.log('Server start with nodemon');
    })
  } catch(err){
    console.log(`${err}`);
  }
};

//===start server==========
start();
