

angular.module('ScoreCtrl', []).controller('ScoreController', function($scope,$http, $window,$location) {

    console.log('score ctrl');
        
  $scope.message = '';
  $scope.score = '';

    $http
      .get('/score')
      .success(function (data, status, headers, config) {
        
        console.log(data.score[0].broncos_score);
        
        $scope.score = data.score[0];
      })
      .error(function (data, status, headers, config) {
        
        console.log('Error fetching scores');
          //var score = {
          //    broncos_score: '0',
          //    panthers_score: '0'
          //};
        //$scope.score = score;
        $scope.message = 'Error fetching scores';
      });


    $scope.submitScore = function () {
        console.log('calling submit score fn');
        console.log($scope.score.broncos_score);
                console.log($scope.score.panthers_score);
    $http
      .post('/score', $scope.score)
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