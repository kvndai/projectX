var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');
const Poll = mongoose.model('Poll')

function UsersController(){

	this.findAll = (req, res, next) => {
		console.log('Find all users function in controller.js');
		User.find({})
		.then((data) => {
			console.log("sending json back to ng services, check client console.")
			res.json(data);
		})
		.catch((err) => {
			res.status(401).json({message: "findAll() controller error", err: err})
		})
	}
	this.create = (req, res, next) => {
		console.log('Create users function in controller.js');		
		let u = new User(req.body);
		// store session here
		u.save()
		.then(() => {
			res.json;
		})
		.catch((err) => {
			res.status(401).json({message: "create() controller error", err: err})
		})
	}
	this.show = function(req, res){
		// retrieve single user
		// this is how we retrieve the users id
		console.log(req.body.id)
	}
}

module.exports = new UsersController();