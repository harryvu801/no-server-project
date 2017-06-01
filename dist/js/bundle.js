'use strict';

var app = angular.module('pokeApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: "views/home-splash.html",
    controller: 'mainCtrl'
  }).state('main-field', {
    url: '/main-field',
    templateUrl: "views/main-field.html",
    controller: 'mainCtrl'
  }).state('pokecenter', {
    url: '/pokecenter',
    templateUrl: "views/pokecenter.html",
    controller: 'mainCtrl'
  }).state('lab', {
    url: '/lab',
    templateUrl: "views/lab.html",
    controller: 'mainCtrl'
  }).state('grass-battle', {
    url: '/grass-battle',
    templateUrl: "views/grass-battle.html",
    controller: 'gbController'
  });
});
'use strict';

app.directive('battleMenu', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/battle-menu.html',
    controller: 'gbController'
  };
});
'use strict';

app.directive('navMenu', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/nav-menu.html'
  };
});
'use strict';

app.controller('gbController', function ($scope, $http) {

  var baseUrl = 'http://pokeapi.co/api/v2/pokemon/';

  $scope.getRandomPokemon = function () {
    console.log('button works');
    return $http.get(baseUrl + Math.ceil(Math.random() * 721)).then(function (response) {
      console.log('got response', response.data);
      $scope.wildPokemon = response.data;
      $scope.move2 = response.data.moves[2].move.name;
      $scope.show = 2;
    });
  }();

  $scope.battlePokemon = function () {
    return $http.get(baseUrl + sessionStorage.getItem('key')).then(function (response) {
      console.log(response.data);
      $scope.myPokemon = response.data;
      $scope.moves = response.data.moves;
    });
  }();

  $scope.letsFight = function () {
    $scope.show++;
  };

  $scope.fight = function (move) {
    console.log('clicked');
    $scope.moveUsed = move;
    $scope.show++;
  };

  $scope.back = function () {
    $scope.show--;
  };
});
'use strict';

app.controller('mainCtrl', function ($scope, $http) {
  $scope.broken = "working";
  $scope.menu = true;

  var baseUrl = 'http://pokeapi.co/api/v2/pokemon/';

  $scope.showMenu = function (key) {
    console.log(key.key);
    if (key.key == 'Enter') {
      $scope.menu = !$scope.menu;
    }
  };

  $scope.setOwnPokemon = function (num) {
    return $http.get(baseUrl + num).then(function (response) {
      console.log(response.data);
      $scope.myPokemon = response.data;
      sessionStorage.setItem('key', num);
    })();
  };
});
"use strict";
//# sourceMappingURL=bundle.js.map
