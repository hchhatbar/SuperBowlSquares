

angular.module('MainCtrl', []).controller('MainController', function($scope,$http, $window,$location) {

    console.log('Main ctrl');
    var cellId = '00';
     var myEl = '';
     $http
      .get('/score')
      .success(function (data, status, headers, config) {
        
        console.log(data);
        
        cellId = data.score.broncos_score.toString() + data.score.panthers_score.toString() 
        myEl = angular.element( document.getElementById(cellId) );
     	myEl.css('background-color', '#FFBF00');  

      })
      .error(function (data, status, headers, config) {
      	myEl = angular.element( document.getElementById(cellId) );
     myEl.css('background-color', '#FFBF00');  
        console.log('Error fetching scores');
        
        $scope.message = 'Error fetching scores';
      });


    
});
