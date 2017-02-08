app.controller('bidController', function($scope, bidFactory, userFactory, $location, $rootScope, $routeParams){
  $scope.err1=[];
  $scope.err2=[];
  $scope.err3=[];

  $scope.lists1=[];
  $scope.lists2=[];
  $scope.lists3=[];

  // bidFactory.getBid1(function(data){
  //   if(data){
  //     console.log(data);
  //     $scope.lists1 = data.data;
  //     console.log($scope.lists1);
  //   }
  // });

  // bidFactory.getBid2(function(data){
  //   if(data){
  //     $scope.lists2 = data.data;
  //   } else {
  //     console.log(false);
  //   }
  // });

  //   bidFactory.getBid3(function(data){
  //   if(data){
  //     $scope.lists3 = data.data;
  //   } else {
  //     console.log(false);
  //   }
  // });
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
      // var listings = data.data;
      
      // if(listings[0]!=undefined){
      //   if(listings[0].item == 'product1'){
      //     $scope.lists1.push(listings[0]);
      //   } else if (listings[0].item == 'product2'){
      //     $scope.lists2.push(listings[0]);
      //   } else if (listings[0].item == 'product3'){
      //     $scope.lists3.push(listings[0]);
      //   } 
      // }

      // if(listings[1]!=undefined){
      //   if(listings[1].item == 'product1'){
      //     $scope.lists1.push(listings[1]);
      //   } else if (listings[1].item == 'product2'){
      //     $scope.lists2.push(listings[1]);
      //   } else if (listings[1].item == 'product3'){
      //     $scope.lists3.push(listings[1]);
      //   }
      // }

      // if(listings[2]!=undefined){
      //   if(listings[2].item == 'product1'){
      //     $scope.lists1.push(listings[2]);
      //   } else if (listings[2].item == 'product2'){
      //     $scope.lists2.push(listings[2]);
      //   } else if (listings[2].item == 'product3'){
      //     $scope.lists3.push(listings[2]);
      //   }
      // }
    }
  });

  var user = $scope.curUser;

  $scope.submitBid1 = function(p){
    if(p==undefined || p.amount==0 || !p.amount){
      $scope.err1.push('Please enter your bid')
    } else {
      p.user = $scope.curUser.user._id;
      p.item = 'product1';
      bidFactory.submitBid(p);
    }
  }

  $scope.submitBid2 = function(p){
    if(p==undefined || p.amount==0 || !p.amount){
      $scope.err2.push('Please enter your bid')
    } else {
      p.user = $scope.curUser.user._id;
      p.item = 'product2';
      console.log(p);
      bidFactory.submitBid(p);
    }
  }

    $scope.submitBid3 = function(p){
    if(p==undefined || p.amount==0 || !p.amount){
      $scope.err3.push('Please enter your bid')
    } else {
      p.user = $scope.curUser.user._id;
      p.item = 'product3';
      bidFactory.submitBid(p);
    }
  }

  $scope.endBid = function(){
    console.log($scope.lists1);
    console.log($scope.lists2);
    console.log($scope.lists3);

    if($scope.lists1.length==0 || $scope.lists2.length==0 || $scope.lists3.length==0){
      alert('Cannot end the bid. One or more products do not have any bid yet');
    } else {
      $location.url('/result');
    }
  }

})
