// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        /*.when('/', {
            templateUrl: 'views/login.html',
            controller: 'MainController'
        })*/

          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
             .when('/score', {
            templateUrl: 'views/score.html',
            controller: 'ScoreController'
        })
            .when('/rules', {
            templateUrl: 'views/rules.html',
            controller: 'RulesController'
        })
           .when('/winner', {
            templateUrl: 'views/winner.html',
            controller: 'WinnerController'
        })


        // nerds page that will use the NerdController
       /* .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        }); */

    //$locationProvider.html5Mode(true);

}]);