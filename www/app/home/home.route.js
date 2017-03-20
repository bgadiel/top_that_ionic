/**
 * Created by gadi on 06/10/2016.
 */
angular.module('topthat.home')
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('top'); //bottom

    $stateProvider

      .state('app.home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        //resolve: {
          //promiseContests: function($firebaseArray, firebaseDataService, toastr) {
            // firebaseDataService.contests.orderByChild("end_time").on('value').then(function (snapshot) {
            //   // The Promise was "fulfilled" (it succeeded).
            //   toastr.success('loaded Promise!');
            //   return snapshot.val();
            // }, function (error) {
            //   // The Promise was rejected.
            //   toastr.error(error);
            // });
            // return $firebaseArray(firebaseDataService.contests.orderByChild("end_time"))
            //   .$loaded()
            //   .then(function(data) {
            //     toastr.success('loaded Contests!');
            //     return data;
            //   })
            //   .catch(function(error) {
            //     toastr.error("Error:", error);
            //   });
          //}
        //}
      });


      // .state('app.featured', {
      //   url: '/featured',
      //   views: {
      //     'featured-tab': {
      //       templateUrl: 'app/home/home.featured/home.featured.html',
      //       controller: 'HomeController',
      //       controllerAs: 'vm',
      //     }
      //   }
      // })
      //
      // .state('app.new', {
      //   url: '/new',
      //   views: {
      //     'new-tab': {
      //       templateUrl: 'app/home/home.new/home.new.html',
      //       controller: 'HomeController',
      //       controllerAs: 'vm',
      //     }
      //   }
      // })
      //
      // .state('app.trends', {
      //   url: '/trends',
      //   views: {
      //     'trends-tab': {
      //       templateUrl: 'app/home/home.trends/home.trends.html',
      //       controller: 'HomeController',
      //       controllerAs: 'vm',
      //     }
      //   }
      // });
  });
