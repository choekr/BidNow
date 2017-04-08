app.factory('bidFactory', function($http, $location, $route){
  var factory = {};

  factory.submitBid = function(b){
    $http.post('/bid/submit', b).then(function(data){
      if(data.data!=null){
        if(data.data.err){
          alert(data.data.err);
        } else {
          $route.reload();
        }
      } else {
        $route.reload();
      }
    });
  }

  factory.getBids = function(cb){
    $http.get('/bid/get_all').then(function(output){
      cb(output);
    })
  }

  // factory.getBid1 = function(cb){
  //   $http.get('/bid/get_bid1').then(function(output){
  //     cb(output);

  //   })
  // }
  // factory.getBid2 = function(cb){
  //   $http.get('/bid/get_bid2').then(function(output){
  //     cb(output);
  //   })
  // }
  // factory.getBid3 = function(cb){
  //   $http.get('/bid/get_bid3').then(function(output){
  //     cb(output);

  //   })
  // }

  factory.endBid = function(cb){
    $http.get('/bid/endBid').then(function(output){
      cb(output);
    })
  }

  factory.reset = function(){
    $http.post('/bid/reset').then(function(output){
      $location.url('/dash');
    })
  }
  return factory;
})
