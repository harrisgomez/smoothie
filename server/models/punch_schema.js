console.log('Successfully loaded Punch Schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var punchSchema = new mongoose.Schema({
    _member: {type: Schema.Types.ObjectId, ref: 'Member'}

}, {timestamps:true} );

mongoose.model('Punch', punchSchema);
