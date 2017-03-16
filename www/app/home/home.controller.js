  angular.module('topthat.home', ['ionic'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$ionicModal', '$timeout', '$firebaseArray', 'firebaseDataService', 'toastr'];

  /* @ngInject */
  function HomeController($scope, $ionicModal, $timeout, $firebaseArray, firebaseDataService, toastr) {
    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = false;
    });

    activate();

    ////////////////

    function activate() {
      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //$scope.$on('$ionicView.enter', function(e) {
      //});

      var contestsRef = firebaseDataService.contests;
      var usersRef = firebaseDataService.users;
      var videosRef = firebaseDataService.videos;

      // download the data into a local object
      vm.contests = $firebaseArray(contestsRef);      // synchronize the object with a three-way data binding
      vm.users = $firebaseArray(usersRef);      // synchronize the object with a three-way data binding
      vm.videos = $firebaseArray(videosRef);     // synchronize the object with a three-way data binding

      vm.contests.$loaded()
        .then(function(x) {
          toastr.success('loaded!');
          vm.filteredContests = $firebaseArray(contestsRef.orderByChild("end_time"));
        })
        .catch(function(error) {
          toastr.error("Error:", error);
        });

      // contestsRef.on("value", function(snapshot) {
      //   var key = snapshot.key;
      //   var childKey = snapshot.val().users;
      //   usersRef.child("users/" + childKey + "/name").once('value', function(snapshot) {
      //     console.log("Mary is a member of this group: " + snapshot.val());
      //   });
      // });

      // contestsRef.on("value", function(snapshot) {
      //   snapshot.forEach(function(contestSnapshot) {
      //     // key will be "ada" the first time and "alan" the second time
      //     var key = contestSnapshot.key;
      //     // childData will be the actual contents of the child
      //     var contest = contestSnapshot.val();
      //     contest.id = contestSnapshot.key;
      //     usersRef.child(contest.user).once('value', function(snapshot) {
      //       contest.user_data = snapshot.val(); // user object
      //       vm.contests.push(contest);
      //     });
      //   });
      // });


      // vm.getUserByContest = function(uid) {
      //   usersRef.child(uid).once('value', function(snapshot) {
      //     console.log("Creator of this contest: " + snapshot.key);
      //     return snapshot.val();
      //   });
      // };
    }
  }


