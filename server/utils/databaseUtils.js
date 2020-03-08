const mongoose = require('mongoose');
const express = require('express');
const user = require('../models/userSchema.js');

const addUser = async (username, budget, cdTime ) => {
    const newUserEntry = new user ({
        userName: username,
        MonthlyBudget: budget,
        RemainingBudget: budget,
        CDtime: cdTime,
        Events: []
    })
    console.log(newUserEntry);
    await newUserEntry.save();
    return newUserEntry; 
};

const getUserData = async (userName) => {
    console.log('inside getuserdata');

    try {
        let userData = await user.findOne({userName: userName}, (err, user) => {
            if (err) {
                console.log("MongoDB Error: " + err);
                return false; 
            } 
            if (!user) {
                console.log('no user found');
                return false;
            }
        });
        return userData;
    } catch (err) {
        console.log(err);
    }
};

const addEventToUser = async (userName, eventName, amount) => {  
    user.findOne({userName: userName}, async function(err, userEntry) {
        if (err) {
            console.log("MongoDB Error: " + err);
            return false; // or callback
        } 
        if (!userEntry) {
            return false;
        }
        //user exists, and i need to create an event
        if (userEntry) {
            const newEvent = {
                EventName: eventName,
                Amount: amount,
                StartDate: Date.now()
            }
            await userEntry.Events.push(newEvent);
            await userEntry.save();

            return userEntry; 
        }
    })
};

module.exports = {
    getUserData: getUserData,
    addUser: addUser, 
    addEventToUser: addEventToUser
}