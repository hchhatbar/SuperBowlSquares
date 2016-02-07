

angular.module('LoginCtrl', []).controller('LoginController', function($scope,$http, $window,$location) {

    console.log('login ctrl');
        
     
    //$scope.user = {username: 'john.doe', password: 'foobar'};
  $scope.message = '';

      $scope.login = function () {
        console.log('calling login fn');
        console.log($scope.user);
    $http
      .post('/authenticate', $scope.user)
      .success(function (data, status, headers, config) {
        console.log('*******');
        console.log(data.token);
        console.log(headers);
        console.log(data);
        console.log(config);
        $window.sessionStorage.token = data.token;
        $scope.message = 'Welcome';
        //$location.url('#/assessment');
        if(data.token){
            $window.location.href = '#/assessment';
        }
      })
      .error(function (data, status, headers, config) {
        console.log('Invalid user');
        // Erase the token if the user fails to log in
        delete $window.sessionStorage.token;

        // Handle login errors here
        $scope.message = 'Error: Invalid user or password';
      });
  };

});
