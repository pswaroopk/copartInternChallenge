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


    $scope.isValid = function () {
      if (!$scope.checkoutISBN || !$scope.checkoutCardNo) {
        $scope.checkoutStatus = '* Please fill all required fields';
        return false;
      }
      $scope.checkoutStatus = '';
      return true;
    }

    $scope.sanitizeAuthors = function (authors) {
      return authors.map(function (author) {
        return author.name;
      })
    };

    $scope.addBorrower = function (form) {
      if (!form.$valid) return false;
      $http.post('/borrower/', $scope.newBorrower)
      .success(function (result) {
        $scope.newBorrower = {};
        $scope.borrowerStatus = result.message;
        $scope.createdBorrower = result.data;
      })
      .error(function (error) {
        console.log('Error: ', error);
      });
    }
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
