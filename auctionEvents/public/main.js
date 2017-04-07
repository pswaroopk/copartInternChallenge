var copartApp = angular.module('copartApp', []);

copartApp.controller('mainController',['$scope','$http', function($scope, $http) {
    $scope.formData = {};
    $scope.yardResults = [];

    $scope.countries = ["US", "UK", "MEA", "IE", "CA"];
    $scope.brands = ["CPRT", "CPRS"];

    $scope.sortType     = 'yardNumber'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order

    $scope.fetchEvents = function() {
      if (!$scope.country_as || !$scope.brand_as) {
        alert('Please select a country and brand');
        return false;
      }
      // $http.get('/yardlocation?radius='+ $scope.radius_as +'&customerId=' + $scope.customer_as + '&zip=' + $scope.zip_as)
      $http.get('/calendar?brand='+ $scope.brand_as +'&country=' + $scope.country_as)
        .success(function(data) {
            //check whats coming here
            $scope.yardResults = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    $scope.fetchCalendarEvents = function() {
      if (!$scope.year_as || !$scope.make_as || !$scope.model_as) {
        alert('Please select a year, make and model');
        return false;
      }
      var searchQuery;
      $http.get('/?brand='+ $scope.year_as +'&country=' + $scope.country_as)
        .success(function(data) {
          //check whats coming here
            $scope.eventResults = data.saleLocations;
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
