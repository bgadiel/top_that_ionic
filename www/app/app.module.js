/**
 * Created by gadi on 18/09/2016.
 */
(function () {
  'use strict';

  angular.module('topthat', ['ionic', 'starter.controllers'])

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

    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/layout/side-menu.html'
        })

        .state('app.home', {
          url: "/home",
          templateUrl: "app/home/home.html",
          controller: "HomeController"
        });

        // .state('app.search', {
        //   url: '/search',
        //   views: {
        //     'menuContent': {
        //       templateUrl: 'templates/search.html'
        //     }
        //   }
        // })
        //
        // .state('app.browse', {
        //   url: '/browse',
        //   views: {
        //     'menuContent': {
        //       templateUrl: 'templates/browse.html'
        //     }
        //   }
        // })
        // .state('app.playlists', {
        //   url: '/playlists',
        //   views: {
        //     'menuContent': {
        //       templateUrl: 'templates/playlists.html',
        //       controller: 'PlaylistsCtrl'
        //     }
        //   }
        // })
        //
        // .state('app.single', {
        //   url: '/playlists/:playlistId',
        //   views: {
        //     'menuContent': {
        //       templateUrl: 'templates/playlist.html',
        //       controller: 'PlaylistCtrl'
        //     }
        //   }
        // });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/home');
    });

})();
