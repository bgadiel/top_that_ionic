/**
 * Created by gadi on 18/09/2016.
 */
(function () {
  'use strict';

  angular.module('topthat', ['ionic', 'topthat.home'])
    .controller('AppController', function($scope) {
      $scope.groups = [];

      $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
          $scope.shownGroup = null;
        } else {
          $scope.shownGroup = group;
        }
      };
      $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
      };

    })

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

      $ionicConfigProvider.tabs.position('top'); //bottom

      $stateProvider

        .state('app', {
          url: "/app",
          abstract: true,
          controller: 'AppController',
          templateUrl: 'app/layout/side-menu.html'
        });

        // .state('app.auth', {
        //   url: "/auth",
        //   abstract: true,
        //   template: '<ion-view/>'
        //})

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/home/main');
    });

})();
