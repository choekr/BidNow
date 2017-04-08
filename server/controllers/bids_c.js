var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');

module.exports = (function(){
  return{
    submit: function(req,res){
      Bid.findOne({item: req.body.item}, function(err, data){
        if(!data){
          var bid = new Bid(req.body);
          bid._user.push(req.session.user._id);
          bid.price.push(req.body.amount);
          bid.save();
          res.json(data);
        } else {
          if(data.price[data.price.length-1]>=req.body.amount){
            err = {err: 'you must enter greater amount than previous bid'};
            res.json(err);
          } else {
            data._user.push(req.session.user._id);
            data.price.push(req.body.amount);
            data.save();
            res.json(data); 
          }
        }
      })
    },

    getAll: function(req,res){
      Bid.find({}).populate({path:'_user'}).exec(function(err,data){
        if(err){
          console.log(err);
        } else {
          res.json(data);
        }
      })
    },

    // getBid1: function(req,res){
    //   Bid.findOne({item: 'product1'}).populate({path:'_user'}).exec(function(err,data){
    //     if(err){
    //       console.log(err);
    //     } else {
    //       res.json(data);
    //     }
    //   })
    // },

    // getBid2: function(req,res){
    //   Bid.findOne({item: 'product2'}).populate({path:'_user'}).exec(function(err,data){
    //     if(err){
    //       console.log(err);
    //     } else {
    //       res.json(data);
    //     }
    //   })
    // },

    // getBid3: function(req,res){
    //   Bid.findOne({item: 'product3'}).populate({path:'_user'}).exec(function(err,data){
    //     if(err){
    //       console.log(err);
    //     } else {
    //       res.json(data);
    //     }
    //   })
    // },

    reset: function(req,res){
      Bid.remove({}, function(err){
        res.json(true);
      });
    }
  }
})();
