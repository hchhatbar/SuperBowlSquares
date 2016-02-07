angular.module('WinnerCtrl', []).controller('WinnerController', function($scope,$http) {


 console.log('winner ctrl');
        
  $scope.message = '';
  $scope.winner = '';

    

    $scope.submitWinner = function () {
        console.log('calling submit winners fn');
        
    $http
      .post('/winner', $scope.winner)
      .success(function (data, status, headers, config) {
        console.log(data);
       
      })
      .error(function (data, status, headers, config) {
        console.log('Winner Error');
        console.log(data);
        console.log(status);


        $scope.message = 'Error: Unable to save winner at this time, please contact the administrator.';
      });
  };
    
});