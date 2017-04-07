app.controller('gbController', function ($scope, $http) {

var baseUrl = 'http://pokeapi.co/api/v2/pokemon/'

  $scope.getRandomPokemon = function () {
    console.log('button works');
    return $http.get(baseUrl + Math.ceil(Math.random() * 721)).then(function (response){
      console.log('got response', response.data);
      $scope.wildPokemon = response.data
    })
  }

  $scope.getRandomPokemon();


  $scope.battlePokemon = function () {
    return $http.get(baseUrl + storedPokemon).then(function (response){
      console.log(response.data.moves[0].move.name);
      $scope.myPokemon = response.data
      $scope.moves = response.data.moves
    })
  }

  // $scope.battlePokemon = function () {
  //   return $http.get(baseUrl + storedPokemon).then(function (response){
  //     console.log(response.data);
  //     $scope.myPokemon = response.data
  //     $scope.moves = response.data.moves
  //   })
  // }

  $scope.battlePokemon();

  $scope.fight = true;
  $scope.letsFight = function () {
    $scope.fight = !$scope.fight;
  }


})
