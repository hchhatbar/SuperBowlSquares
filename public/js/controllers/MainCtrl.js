

angular.module('MainCtrl', []).controller('MainController', function($scope,$http, $window,$location) {

    console.log('Main ctrl');
    var cellId = '00';
     var myEl = '';
     $http
      .get('/score')
      .success(function (data, status, headers, config) {
        
        console.log(data.score[0].broncos_score);
        console.log(data.score[0].panthers_score);
        cellId = data.score[0].broncos_score + data.score[0].panthers_score;
        console.log('cellId: ' + cellId);
        myEl = angular.element( document.getElementById(cellId) );
     	myEl.css('background-color', '#FFBF00');  

      })
      .error(function (data, status, headers, config) {
      	myEl = angular.element( document.getElementById(cellId) );
     myEl.css('background-color', '#FFBF00');  
        console.log('Error fetching scores');
        
        $scope.message = 'Error fetching scores';
      });

        $http
      .get('/winner')
      .success(function (data, status, headers, config) {
        
        console.log(data);
        $scope.winner = data.winners;

      })
      .error(function (data, status, headers, config) {
      	console.log('Error fetching winners');
        
        $scope.message = 'Error fetching winners';
      });
    
});
