// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', function($scope, NerdFactory) {
	//angular.module('NerdCtrl')
    //.controller('NerdController', ['$scope', 'NerdFactory', 
    //    function ($scope, NerdFactory) {

        console.log('nerd ctrl');
        NerdFactory.get()
            .success(function(data, status) {
            	console.log('success');
            	console.log(status);
            	console.log(data);
                $scope.nerds = data;
            })
            .error(function (error) {

        console.log(error);
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    //studentSession.getSessions().success(handleSuccess);
    
    $scope.tagline = 'Nothing beats a pocket protector!';

});