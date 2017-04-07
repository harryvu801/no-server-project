var app = angular.module('pokeApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('','/')

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl:"views/home-splash.html",
        controller:'mainCtrl'
      })

      .state('main-field', {
        url:'/main-field',
        templateUrl:"views/main-field.html",
        controller:'mainCtrl'
      })

      .state('pokecenter', {
        url:'/pokecenter',
        templateUrl:"views/pokecenter.html",
        controller:'mainCtrl'
      })

      .state('lab', {
        url:'/lab',
        templateUrl:"views/lab.html",
        controller:'mainCtrl'
      })
  })
