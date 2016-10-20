/**
 * Created by gadi on 06/10/2016.
 */
angular.module('topthat.home')
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('top'); //bottom

    $stateProvider

      .state('app.home', {
        url: "/home",
        abstract: true,
        templateUrl: "app/home/tabs.html"
      })

      .state('app.home.featured', {
        url: '/featured',
        views: {
          'main-tab': {
            templateUrl: 'app/home/home.main/home.main.html',
            controller: 'HomeController'
          }
        }
      })

      .state('app.home.custom', {
        url: '/custom',
        views: {
          'trends-tab': {
            templateUrl: 'app/home/home.trends/home.trends.html',
            controller: 'HomeController'
          }
        }
      })

      .state('app.home.new', {
        url: '/new',
        views: {
          'new-tab': {
            templateUrl: 'app/home/home.new/home.new.html',
            controller: 'HomeController'
          }
        }
      });

  });
