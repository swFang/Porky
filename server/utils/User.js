"use strict";
exports.__esModule = true;
var mockdata = require("../mockdata/MockData.json");
function getUser(id) {
    if (mockdata.User == id) {
        console.log('inside get user');
    }
}
exports.getUser = getUser;
