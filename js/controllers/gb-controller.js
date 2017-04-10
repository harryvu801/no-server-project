app.controller('gbController', function ($scope, $http) {

var baseUrl = 'http://pokeapi.co/api/v2/pokemon/'

  $scope.getRandomPokemon = function () {
    console.log('button works');
    return $http.get(baseUrl + Math.ceil(Math.random() * 721)).then(function (response){
      console.log('got response', response.data);
      $scope.wildPokemon = response.data
      $scope.move2= response.data.moves[2].move.name
    })
  }();

  $scope.life = 1

  $scope.fight = function (move) {
    console.log('clicked');
    $scope.moveUsed = move
    $scope.life++;
    $scope.show++


    if ($scope.life < 2) {
      $scope.life = 1;
    }
  }




  $scope.battlePokemon = function () {
    return $http.get(baseUrl + sessionStorage.getItem('key')).then(function (response){
      console.log(response.data);
      $scope.myPokemon = response.data
      $scope.moves = response.data.moves
      $scope.life = 1;
    })
  }();




  $scope.show = 0;
  $scope.letsFight = function () {
    $scope.show++;
  }
  $scope.back = function () {
    $scope.show = 0;
  }


})
