const mongoose = require('mongoose');
const express = require('express');
const user = require('../models/userSchema.js');
const { addUser, getUserData, addEventToUser } = require('../utils/databaseUtils');

//TODO: refactor all db functions into it's own file and use routes.js file as ONLY a rounter that's an intermediary that passes in the params to that db file.
module.exports = (app, db) => {
    app.get('/', (req,res) => {
        res.send({hi:'there'});
    });

    /*
    MonthlyBudget: Number,
    RemainingBudget: Number,    
    MonthlyCD: Number,
    Events: [
    */
    app.get('/storeData', async (req, res) => {
        let userName = req.query.username; 
        let budget = req.query.budget;
        let CDtime = req.query.cdTime;

        console.log(userName);
        const newUser = await addUser(userName, budget, CDtime);
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
    app.get('/addEvent', async (req, res) => {
        let eventName = req.query.eventname; 
        let amount = req.query.amount;
        let userName = req.query.username; 
        
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