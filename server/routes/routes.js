const mongoose = require('mongoose');
const express = require('express');
const user = require('../models/userSchema.js');
var bodyParser = require('body-parser');
const { addUser, getUserData, addEventToUser } = require('../utils/databaseUtils');

module.exports = (app, db) => {
    app.use(bodyParser.json());

    app.get('/', (req,res) => {
        res.send({hi:'there'});
    });

    app.post('/createUser', async (req, res) => {
        const newUser = await addUser(req.body.userName, req.body.budget, req.body.cdTime);
        res.send(newUser);
    });

    app.get('/getData', async (req, res) => {
        let userName = req.query.userName; 
        const userData = await getUserData(userName);
        res.send(userData);
    });

    app.post('/addEvent', async (req, res) => {
        let eventName = req.body.eventname; 
        let amount = req.body.amount;
        let userName = req.body.username; 
        
        const userEntry = await addEventToUser(userName, eventName, amount);
        res.send(userEntry);
    });
};