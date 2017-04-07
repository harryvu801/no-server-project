app.controller('mainCtrl', function ($scope) {
  $scope.broken = "working"
  $scope.menu = true;

  $scope.showMenu = function(key) {
    console.log(key.key);
    if (key.key == 'Enter') {
      $scope.menu = !$scope.menu;
    }
  }
})
