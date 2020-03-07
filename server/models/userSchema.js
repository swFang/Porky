const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema({
    userName: String,
    MonthlyBudget: Number,
    RemainingBudget: Number,
    CDtime: Number,
    Events: [
        {
            EventName: String,
            Amount: Number,
            StartDate: Date
        }
    ]
});

module.exports = mongoose.model('users', userSchema);