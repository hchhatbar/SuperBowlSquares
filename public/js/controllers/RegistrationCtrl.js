

angular.module('RegistrationCtrl', []).controller('RegistrationController', function($scope,$http, $window,$location) {

    console.log('registration ctrl');
        
  $scope.message = '';
    
    $scope.register = function () {
        console.log('calling login fn');
        console.log($scope.user);
    $http
      .post('/users', $scope.user)
      .success(function (data, status, headers, config) {
        console.log(data);
       
      })
      .error(function (data, status, headers, config) {
        console.log('Registration Error');
        console.log(data);
        console.log(status);


        $scope.message = 'Error: Unable to register at this time, please contact the administrator.';
      });
  };

});