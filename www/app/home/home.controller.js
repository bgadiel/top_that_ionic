  angular.module('topthat.home', ['ionic'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$ionicModal', '$timeout', '$firebaseArray', 'firebaseDataService', 'toastr'];

  /* @ngInject */
  function HomeController($scope, $ionicModal, $timeout, $firebaseArray, firebaseDataService, toastr) {
    var vm = this;
    var contestsRef = firebaseDataService.contests;
    var usersRef = firebaseDataService.users;

    vm.topVideosPerContests =[];

    //vm.getTopVideo = getTopVideo;

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

      // download the data into a local object
      vm.contests = $firebaseArray(contestsRef.orderByChild("end_time"));      // synchronize the object with a three-way data binding
      vm.users = $firebaseArray(usersRef);      // synchronize the object with a three-way data binding

      vm.contests.$loaded()
        .then(function(x) {
          toastr.success('loaded!');
          insertTopVideos();
        })
        .catch(function(error) {
          toastr.error("Error:", error);
        });

      // contestsRef.on("value", function(snapshot) {
      //   vm.contests = snapshot.val();
      //   //insertTopVideos();
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


    function insertTopVideos(){
      // vm.contests.forEach(function(contest, index) {
      //   var ref = firebase.database().ref("contests/" + contest.id +"/videos").orderByChild("like").limitToFirst(2);
      //   ref.once("value").then(function(snapshot) {
      //     vm.topVideosPerContests[index] = snapshot.val();
      //     });
      //
      // });

      contestsRef.once('value', function(snapshot) {
        snapshot.forEach(function(contestSnapshot, index) {
          var videos = contestSnapshot.val().videos;
          var videosRef = contestSnapshot.child('videos').ref;
          videosRef.orderByChild("like").limitToLast(2).once("value", function(snapshot) {
            console.log(snapshot.val());
            vm.topVideosPerContests.push(snapshot.val());
          });
        });
      });


        //.child('videos').orderByChild("share").limitToFirst(2).on("value", function(snapshot) {
        //var vm.topVideosPerContests[contest.id]
        //var x = snapshot.val;
        //console.log(vm.topVideosPerContests);
      //});
    }
  }


