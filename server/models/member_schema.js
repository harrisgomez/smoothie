console.log('Successfully loaded Member Schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new mongoose.Schema({
    f_name: {type: String},
    l_name: {type: String},
    // dob: {type: Date, required: [true, "Date of Birth is required."]},
    // email:  {type: String, unique: true, required: [true, "Invalid email."], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    phone: {type: Number},
    punches: [{type: Schema.Types.ObjectId, ref: 'Punch'}]

}, {timestamps: true} );

mongoose.model('Member', memberSchema);
