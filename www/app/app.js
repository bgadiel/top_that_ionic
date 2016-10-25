/**
 * Created by gadi on 18/09/2016.
 */
(function () {
  'use strict';

   angular.module('topthat', ['ionic', 'topthat.home', 'topthat.contest'])
  //   .controller('AppController', function($scope) {
  //     //var vm = this;
  //     $scope.isShowCat = false;
  //
  //     $scope.toggleGroup = function() {
  //       $scope.isShowCat = $scope.isShowCat === false ? true : false;
  //     };
  //
  //   })

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
          templateUrl: 'app/layout/side-menu.html'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/home');
    });

})();
