angular.module('applier').controller('EeauthenticationController', ['$scope', '$http', '$location', 'Eauthentication',
	function($scope, $http, $location, Eauthentication) {
		$scope.Eauthentication = Eauthentication;

		// If applier is signed in then redirect back home
		if ($scope.eauthentication.applier) $location.path('/');

		$scope.Esignup = function() {
			$http.post('/auth/Esignup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global applier model
				$scope.eauthentication.applier = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.Esignin = function() {
			$http.post('/auth/Esignin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global applier model
				$scope.eauthentication.applier = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);