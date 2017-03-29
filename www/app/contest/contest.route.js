/**
 * Created by gadi on 25/10/2016.
 */

angular.module('topthat.contest')
  .config(function($stateProvider) {

    $stateProvider

      .state('app.contest', {
        url: "/:contestID",
        templateUrl: 'app/contest/contestTabs.html',
        controllerAs: 'vm',
        controller: 'ContestController',
        cache: false,
      })

      .state('app.contest.first', {
        url: "/first",
        cache: false,
        views: {
          'first-round-tab': {
            templateUrl: 'app/contest/contestFirst.html',
          }
        }
      })

      .state('app.contest.semi', {
        url: "/semi",
        cache: false,
        views: {
          'semi-finals-tab': {
            templateUrl: 'app/contest/contestSemi.html',
          }
        }
      })

      .state('app.contest.finals', {
        url: "/finals",
        cache: false,
        views: {
          'finals-tab': {
            templateUrl: 'app/contest/contestFinals.html',
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
