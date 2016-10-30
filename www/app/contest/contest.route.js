/**
 * Created by gadi on 25/10/2016.
 */

angular.module('topthat.contest')
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider

      .state('app.contest', {
        abstract: true,
        templateUrl: 'app/contest/contestTabs.html',
      })


      .state('app.contest.first', {
        url: "/first",
        views: {
          'first-round-tab': {
            templateUrl: 'app/contest/contest.html',
            controller: 'ContestController',
            controllerAs: 'vm',
          }
        }
      })

      .state('app.contest.semi', {
        url: "/semi",
        views: {
          'semifinals-tab': {
            templateUrl: 'app/contest/contest.html',
            controller: 'ContestController',
            controllerAs: 'vm',
          }
        }
      })

      .state('app.contest.finals', {
        url: "/finals",
        views: {
          'finals-tab': {
            templateUrl: 'app/contest/contest.html',
            controller: 'ContestController',
            controllerAs: 'vm',
          }
        }
      });


      // .state('app.contest.details', {
      //   url: '/home/:contestID',
      //     views: {
      //       'first-round-tab': {
      //         templateUrl: 'app/contest/contest.html',
      //         controller: 'ContestController',
      //         controllerAs: 'vm',
      //       },
      //       'semifinals-tab': {
      //         templateUrl: 'app/contest/contest.html',
      //         controller: 'ContestController',
      //         controllerAs: 'vm',
      //       },
      //       'finals-tab': {
      //         templateUrl: 'app/contest/contest.html',
      //         controller: 'ContestController',
      //         controllerAs: 'vm',
      //       }
      //     }
      // });





    // .state('app.featured_contest', {
    //   url: '/featured/:contestID',
    //   views: {
    //     'featured-tab': {
    //       templateUrl: 'app/contest/contest.html',
    //       controller: 'ContestController',
    //       controllerAs: 'vm',
    //     }
    //   },
    // })
    //
    // .state('app.new_contest', {
    //   url: '/new/:contestID',
    //   views: {
    //     'new-tab': {
    //       templateUrl: 'app/contest/contest.html',
    //       controller: 'ContestController',
    //       controllerAs: 'vm',
    //     }
    //   }
    // })
    //
    // .state('app.trends_contest', {
    //   url: '/trends/:contestID',
    //   views: {
    //     'trends-tab': {
    //       templateUrl: 'app/contest/contest.html',
    //       controller: 'ContestController',
    //       controllerAs: 'vm',
    //     }
    //   }
    // });

  });
