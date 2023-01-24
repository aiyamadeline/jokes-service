const express = require('express');
//const { where } = require('sequelize/types');
const app = express();
const { Joke } = require('./db');
const {Op} = require("sequelize")
const { Sequelize } = require('sequelize');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/jokes', async (req, res, next) => {
    // TODO - filter the jokes by tags and content
    console.log(req.query)
    const where = {};
    
    if (req.query.tags) {
      where.tags = {  [Op.like]: `%${req.query.tags}%` }
    }
    

    if (req.query.content) {
      where.tags = {  [Op.like]: `%${req.query.tags}%`}
    }
      
    
    const jokes = Joke.findAll({where});
    res.send(jokes);
 
  
});

// we export the app, not listening in here, so that we can run tests
module.exports = app;
