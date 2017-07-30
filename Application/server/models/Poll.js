var mongoose = require('mongoose');
var PollSchema = new mongoose.Schema({
    _user: {type : mongoose.Schema.Types.ObjectId, ref:'User'}, 
    question:{ type: String, required: true},
    option1: { type: String, required: true},
    vote1: { type: Number},
    option2: { type: String, required: true},
    vote2: { type: Number},
    option3: { type: String, required: true},
    vote3: { type: Number},
    option4: { type: String, required: true},
    vote4: { type: Number},
},{timestamps:true});
// Remember we can treat mongoose.model() as a getter function or a setter function
// mongoose.model('User') will båe used to retrieve user scema
// mongoose.model('User', UserSchema) will be used to set the userSchema to the User key
// we will retrieve this schema in our userController later
mongoose.model('Poll', PollSchema);

// Custom Validations for user schema
