var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, required: true, minlength:3}
}, {timestamps: true})
mongoose.model('User', UserSchema);


var BidSchema = new Schema({
  item: {type: String, required: true},
  _user: [{type: Schema.Types.ObjectId, ref: 'User'}],
  price: [{type: Number, required: true}]
}, {timestamps: true})
mongoose.model('Bid', BidSchema);
