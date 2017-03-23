console.log('Successfully loaded associate schema');
var mongoose = require('mongoose');

var associateSchema = new mongoose.Schema({
    f_name: {type: String, required: [true, "First name is required."]},
    l_name: {type: String, required: [true, "Last name is required."]},
    // dob: {type: Date, required: [true, "Date of Birth is required."]},
    // email:  {type: String, unique: true, required: [true, "Invalid email."], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    employee_id: {type: Number, required: [true, "Employee ID is required."]}

}, {timestamps: true} );

mongoose.model('Associate', associateSchema);
