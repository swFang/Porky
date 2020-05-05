const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const keys = require('../keys');

//connect mongob
mongoose.connect(
    keys.mlabEndPt,
    {useNewUrlParser: true}
).then(() => {
    console.log('Databased connected');
})
.catch(err => {
    console.log(err);
});

//get connection 
var db = mongoose.connections; 

const app = express(); 
// routes(app, db);app.use(bodyParser.json());

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

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
});
