app.controller('mainCtrl', function ($scope, $http) {
  $scope.broken = "working"
  $scope.menu = true;

  var baseUrl = 'http://pokeapi.co/api/v2/pokemon/'

  $scope.showMenu = function(key) {
    console.log(key.key);
    if (key.key == 'Enter') {
      $scope.menu = !$scope.menu;
    }
  }

  $scope.setOwnPokemon = function (num) {
    return $http.get(baseUrl + num).then(function (response){
      console.log(response.data);
      $scope.myPokemon = response.data
      sessionStorage.setItem('key', num);
    })();
  }





})
