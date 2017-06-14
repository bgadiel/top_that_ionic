/**
 * Created by gadi on 18/09/2016.
 */
(function () {
  'use strict';

  angular.module('topthat', ['ionic','ngStorage', 'ngCordova', 'firebase', 'toastr', 'topthat.core',
    'topthat.auth', 'topthat.home', 'topthat.contest', 'topthat.new.contest', 'ngCordovaOauth'])

    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
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

    .filter('reverse', function () {
      return function (items) {
        return items.slice().reverse();
      };
    })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('top'); //bottom
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back'); // to remove 'back' title from back button

    $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: 'app/layout/side-menu.html'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/auth/welcome');
  });

})();
