

angular.module('AssessmentCtrl', []).controller('AssessmentController', function($scope, $http,$window) {

    console.log('Assessment ctrl');
        
    $http({url: '/api/assessment', method: 'GET'})
    .success(function (data, status, headers, config) {
    	console.log(data);
    	console.log(status);
    	  	console.log(headers);
    	console.log(config);
      $scope.message = $scope.message + ' ' + data.name; // Should log 'foo'
      
    })
    .error(function (data, status, headers, config) {
                $window.location.href = '#/login';
      //alert(data);
    });




});

