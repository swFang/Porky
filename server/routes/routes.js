const mongoose = require('mongoose');
const express = require('express');
const user = require('../models/userSchema.js');
var bodyParser = require('body-parser');
const { addUser, getUserData, addEventToUser } = require('../utils/databaseUtils');

//TODO: refactor all db functions into it's own file and use routes.js file as ONLY a rounter that's an intermediary that passes in the params to that db file.
module.exports = (app, db) => {
    app.use(bodyParser.json());

    app.get('/', (req,res) => {
        res.send({hi:'there'});
    });

    /*
    MonthlyBudget: Number,
    RemainingBudget: Number,    
    MonthlyCD: Number,
    Events: [
    */
    app.post('/createUser', async (req, res) => {
        // let userName = req.query.username; 
        // let budget = req.query.budget;
        // let CDtime = req.query.cdTime;
        const newUser = await addUser(req.body.userName, req.body.budget, req.body.cdTime);
        res.send(newUser);
    });

    app.get('/getData', async (req, res) => {
        let userName = req.query.userName; 
        const userData = await getUserData(userName);
        res.send(userData);
    });

    /*
    Name: String,
    Amount: Number,
    StartDate: Date
    */
    app.post('/addEvent', async (req, res) => {
        let eventName = req.body.eventname; 
        let amount = req.body.amount;
        let userName = req.body.username; 
        
        const userEntry = await addEventToUser(userName, eventName, amount);
        res.send(userEntry);
    });

    // app.get('/test', async (req, res) => {
    //     user.findOneAndUpdate(
    //         {
    //             userName: 'daniel'  // search query
    //         }, 
    //         {
    //             userName: 'theoutlander@live.com'   // field:values to update
    //         },
    //         {
    //           new: true,                       // return updated doc
    //           runValidators: true              // validate before update
    //         })
    //       .then(doc => {
    //         console.log(doc)
    //       })
    //       .catch(err => {
    //         console.error(err)
    //       })
    // })
};