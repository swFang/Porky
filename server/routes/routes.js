const mongoose = require('mongoose');
const express = require('express');
const user = require('../models/userSchema.js');


module.exports = (app, db) => {
    app.get('/', (req,res) => {
        res.send({hi:'there'});
    });

    app.get('/getData', (req, res) => {
        let id = req.query.id;
        user.getUser(id);
        res.send({
            hi: id
        })
    });

    /*
    MonthlyBudget: Number,
    RemainingBudget: Number,    
    MonthlyCD: Number,
    Events: [
    */
    app.get('/storeData', async (req, res) => {
        let name = req.query.name; 
        let budget = req.query.budget;
        let CDtime = req.query.cdTime;
        const newUser = new user ({
            User: name,
            MonthlyBudget: budget,
            RemainingBudget: budget,
            CDtime: CDtime,
            Events: []
        })
        await newUser.save();
        res.send(newUser);
    });

    app.get('/getData', async (req, res) => {
        let name = req.query.name; 
        const newUser = new user ({
            name: name
        })
        await newUser.save();
        res.send(newUser);

    });
};