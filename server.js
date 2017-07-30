const express  = require( 'express' );
const bp = require("body-parser");
const path = require("path");
const root = __dirname;
const app = express();
const port = 8000;

app.use( express.static('./public/dist' ));
app.use(bp.json());


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});