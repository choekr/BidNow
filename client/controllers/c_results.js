app.controller('resultsController',function(bidFactory,userFactory,$scope, $location){
  
  $scope.lists1=[];
  $scope.lists2=[];
  $scope.lists3=[];
  
  bidFactory.getBids(function(data){
    if(data){
      var listings = data.data
      for (var i=0; i<listings.length; i++){
        if(listings[i].item == 'product1'){
          $scope.lists1.push(listings[i]);
        } else if (listings[i].item == 'product2'){
          $scope.lists2.push(listings[i]);
        } else if (listings[i].item == 'product3'){
          $scope.lists3.push(listings[i]);
        }
      }
    }
  });

  $scope.reset = function(){
    bidFactory.reset();
  }

})
