/**
 * Created by gadi on 02/11/2016.
 */
/**
 * Created by gadi on 25/10/2016.
 */

angular.module('topthat.new.contest')
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider

      .state('app.newcontest', {
        url: "/new",
        templateUrl: 'app/new.contest/new.contest.html',
        controller: 'NewContestController',
        controllerAs: 'vm',
      });

  });
