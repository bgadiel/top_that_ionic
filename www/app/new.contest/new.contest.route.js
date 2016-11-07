/**
 * Created by gadi on 25/10/2016.
 */

angular.module('topthat.new.contest')
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider

      // .state('app.newcontest', {
      //   url: "/new",
      //   templateUrl: 'app/new.contest/new.contest.html',
      //   controller: 'NewContestController',
      //   controllerAs: 'vm',
      // });

      .state('app.newstep1', {
        url: "/newstep1",
        templateUrl: 'app/new.contest/new.contest.step1.html',
        controller: 'NewContestController',
        controllerAs: 'vm',
      })

      .state('app.newstep2', {
        url: "/newstep2",
        templateUrl: 'app/new.contest/new.contest.step2.html',
        controller: 'NewContestController',
        controllerAs: 'vm',
      });

  });
