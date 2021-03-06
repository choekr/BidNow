var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
  return{
    login: function(req,res){
      User.findOne({name: req.body.name}, function(err,data){
        if(!data){
          var user = new User(req.body);
          user.save(function(err,data){
            req.session.user = data;
            req.session.save();
            res.json(data);
          })
        } else {
          req.session.user = data;
          req.session.save();
          res.json(req.session);
        }
      })
    },
    checkStatus: function(req,res){
      if(req.session.user){
        User.findOne({name:req.session.user.name}, function(err,data){
          if (err){
            res.json(err);
          } else {
            res.json(req.session);
          }
        });
      } else {
        res.json(null);
      }
    },
    logout: function(req,res){
      req.session.destroy();
      res.redirect('/');
    }
  }
})();
