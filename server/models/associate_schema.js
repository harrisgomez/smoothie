console.log('Successfully loaded Associate Schema');
var mongoose = require('mongoose');

var associateSchema = new mongoose.Schema({
    f_name: {type: String},
    l_name: {type: String},
    // dob: {type: Date, required: [true, "Date of Birth is required."]},
    // email:  {type: String, unique: true, required: [true, "Invalid email."], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    employee_id: {type: Number}

}, {timestamps: true} );

mongoose.model('Associate', associateSchema);
