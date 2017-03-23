var mongoose = require('mongoose');
var associates = require('./../controllers/associates.js'); // routes us to back-end controllers

module.exports = function(app){
    app.post('/login', associates.index);
    // app.post('/register', users.create);
    // app.get('/users/:id', users.index);
};
