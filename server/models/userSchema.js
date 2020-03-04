const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema({
    User: String,
    MonthlyBudget: Number,
    RemainingBudget: Number,
    MonthlyCD: Number,
    Events: [
        {
            Name: String,
            Amount: Number,
            StartDate: Date
        }
    ]
});

module.exports = mongoose.model('users', userSchema);