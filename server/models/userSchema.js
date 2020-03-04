const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema({
    User: String,
    MonthlyBudget: Number,
    RemainingBudget: Number,
    CDtime: Number,
    Events: [
        {
            Name: String,
            Amount: Number,
            StartDate: Date
        }
    ]
});

module.exports = mongoose.model('users', userSchema);