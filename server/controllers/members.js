console.log('Server Members Controller is loaded');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Member = mongoose.model('Member');

module.exports = {
    index: function(req, res){
        Member.find({}, function(err, results){
            return res.json(results);
        })
    },

    create: function(req, res){
        Member.create(req.body, function(err, result){
            return res.json(result);
        })
    },

    show: function(req, res){
        Member.findOne({_id: req.params.id}, function(err, result){
            return res.json(result);
        })
    }
}
