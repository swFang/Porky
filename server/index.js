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
routes(app, db);
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
});
