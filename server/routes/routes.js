const mongoose = require('mongoose');
const express = require('express');
const user = require('../models/userSchema.js');

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
        let userName = req.query.userName; 
        let budget = req.query.budget;
        let CDtime = req.query.cdTime;
        const newUser = new user ({
            userName: userName,
            MonthlyBudget: budget,
            RemainingBudget: budget,
            CDtime: CDtime,
            Events: []
        })
        await newUser.save();
        res.send(newUser);
    });

    app.get('/getData', async (req, res) => {
        let userName = req.query.userName; 
        user.findOne({userName: userName}, function(err, user) {
            if (err) {
                console.log("MongoDB Error: " + err);
                return false; // or callback
            } 
            if (!user) {
                res.send('not found');
            } else {
                res.send('found user' + user); 
            }
        })
    });

    /*
    Name: String,
    Amount: Number,
    StartDate: Date
    */
    app.get('/addEvent', async (req, res) => {
        let EventName = req.query.eventName; 
        let Amount = req.query.amount;
        let userName = req.query.userName; 
        
        user.findOne({userName: userName}, function(err, userEntry) {
            if (err) {
                console.log("MongoDB Error: " + err);
                return false; // or callback
            } 
            if (!userEntry) {
                res.send('user does not exist');
            }
            //user exists, and i need to create an event
            if (userEntry) {
                const newEvent = {
                    EventName: eventName,
                    Amount: amount,
                    StartDate: Date.now()
                }
                userEntry.Events.push(newEvent);
                userEntry.save();

                res.send(userEntry);
            }
        })
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