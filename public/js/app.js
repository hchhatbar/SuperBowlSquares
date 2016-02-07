angular.module('slalomNISTApp', 
['ngRoute', 'appRoutes', 'LoginCtrl', 'MainCtrl', 'AssessmentCtrl', 'RegistrationCtrl',
	'NerdService',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
 .factory('httpInterceptor', function($q, $location,$window) {
        return {
        request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
      	console.log('httpInterceptor');
      	console.log($window.sessionStorage.token);
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    responseError: function (rejection) {
      if (rejection.status === 401) {
        // handle the case where the user is not authenticated
        console.log('redirecting to login');
        //$location.url('#/login');
        $window.location.href = '#/login';
      }
      return $q.reject(rejection);
    }
  };
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
});

/*.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});*/


