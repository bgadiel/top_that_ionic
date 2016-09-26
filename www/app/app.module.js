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

    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

      $ionicConfigProvider.tabs.position('top'); //bottom

      $stateProvider

        .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: 'app/layout/side-menu.html'
        })

        // .state('app.auth', {
        //   url: "/auth",
        //   abstract: true,
        //   template: '<ion-view/>'
        //})

        .state('app.home', {
          url: "/home",
          abstract: true,
          templateUrl: "app/home/tabs.html"
        })

        .state('app.home.main', {
          url: '/main',
            views: {
              'main-tab': {
                templateUrl: 'app/home/partials/home.feed.html',
                controller: 'HomeController'
              }
            }
        })

        .state('app.home.trends', {
          url: '/trends',
          views: {
            'trends-tab': {
              templateUrl: 'app/home/partials/home.trends.html',
              controller: 'HomeController'
            }
          }
        })

        .state('app.home.new', {
          url: '/new',
          views: {
            'new-tab': {
              templateUrl: 'app/home/partials/home.new.html',
              controller: 'HomeController'
            }
          }
        });

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
      $urlRouterProvider.otherwise('/app/home/main');
    });

})();
