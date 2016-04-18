var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Song = new Schema({
  text : String,
  completed: Boolean
});

mongoose.model( 'Song', Song );
mongoose.connect( 'mongodb://localhost/billboard100' );