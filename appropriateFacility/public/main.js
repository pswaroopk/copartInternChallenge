var copartApp = angular.module('copartApp', []);

copartApp.controller('mainController',['$scope','$http', function($scope, $http) {
    $scope.formData = {};
    $scope.searchResults = [];

    $scope.fetchNearestYards = function() {
      if (!$scope.customer_as || !$scope.zip_as) {
        alert('Please select a branch to continue');
        return false;
      }
      var searchQuery;
      $http.get('/yardlocation?radius='+ $scope.radius_as +'&customerId=' + $scope.customer_as + '&zip=' + $scope.zip_as)
        .success(function(data) {
            $scope.searchResults = data.availableLocations;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };



}]);
copartApp.directive('keypress', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.keypress);
                });

                event.preventDefault();
            }
        });
    };
});
