var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
     user:{ type: String, required: true},
    
});
// Remember we can treat mongoose.model() as a getter function or a setter function
// mongoose.model('User') will båe used to retrieve user scema
// mongoose.model('User', UserSchema) will be used to set the userSchema to the User key
// we will retrieve this schema in our userController later
mongoose.model('User', UserSchema);

// Custom Validations for user schema
UserSchema.path('user').required(true, 'First Name cannot be blank');
