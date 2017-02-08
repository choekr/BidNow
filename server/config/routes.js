var user = require('./../controllers/users_c.js');
var bid = require('./../controllers/bids_c.js');

module.exports = function(app){
  app.post('/login', user.login);

  app.get('/checkstatus', user.checkStatus);

  app.get('/logout', user.logout);

  app.post('/bid/submit', bid.submit);

  app.get('/bid/get_all', bid.getAll);

  app.get('/bid/get_bid1', bid.getBid1);
  app.get('/bid/get_bid2', bid.getBid2);
  app.get('/bid/get_bid3', bid.getBid3);

  app.post('/bid/reset', bid.reset);

}
