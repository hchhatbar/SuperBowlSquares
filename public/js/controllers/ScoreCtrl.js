

angular.module('ScoreCtrl', []).controller('ScoreController', function($scope,$http, $window,$location) {

    console.log('score ctrl');
        
  $scope.message = '';
  $scope.score = '';

    $http
      .get('/score')
      .success(function (data, status, headers, config) {
        
        console.log(data);
        
        $scope.score = data.score;
      })
      .error(function (data, status, headers, config) {
        
        console.log('Error fetching scores');
          var score = {
              broncos_score: '0',
              panthers_score: '0'
          };
        $scope.score = score;
        $scope.message = 'Error fetching scores';
      });


    $scope.score = function () {
        console.log('calling login fn');
        console.log($scope.user);
    $http
      .post('/score', $scope.user)
      .success(function (data, status, headers, config) {
        console.log(data);
       
      })
      .error(function (data, status, headers, config) {
        console.log('Score Error');
        console.log(data);
        console.log(status);


        $scope.message = 'Error: Unable to save score at this time, please contact the administrator.';
      });
  };

});