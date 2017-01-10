/**
 * Created by gadi on 06/10/2016.
 */
angular.module('topthat.auth')
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('top'); //bottom

    $stateProvider

      .state('auth', {
        url: "/auth",
        templateUrl: "app/auth/auth.html",
        controller: "AuthController",
        abstract: true
      })

      .state('auth.welcome', {
        url: '/welcome',
        templateUrl: "app/auth/welcome.html",
        controller: 'AuthController',
        resolve: {
          show_hidden_actions: function(){
            return false;
          }
        }
      })

      .state('auth.login', {
        url: '/login',
        templateUrl: "app/auth/login.html",
        controller: 'AuthController'
      })

      .state('auth.signup', {
        url: '/signup',
        templateUrl: "app/auth/signup.html",
        controller: 'AuthController'
      })

      .state('auth.forgot-password', {
        url: '/forgot-password',
        templateUrl: "app/auth/forgot-password.html",
        controller: 'AuthController'
      });

  });
