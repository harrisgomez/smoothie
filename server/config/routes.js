var mongoose = require('mongoose');
var associates = require('./../controllers/associates.js'); // routes us to back-end controllers
var members = require('./../controllers/members.js'); // routes us to back-end controllers
var punches = require('./../controllers/punches.js'); // routes us to back-end controllers

module.exports = function(app){
    app.post('/login', associates.login);
    app.get('/members', members.index);
    app.post('/members/new', members.create);
    app.get('/members/:id', members.show);
    app.post('/punch/:id', punches.create);
};
