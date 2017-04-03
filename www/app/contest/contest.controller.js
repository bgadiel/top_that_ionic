/**
 * Created by gadi on 25/10/2016.
 */
angular.module('topthat.contest', ['ionic'])
  .filter('filterVideos', function () {
    return function (videos, stage) {
      return videos.filter(function (item) {
        return item.stage === stage;
      });
    };
  })
  .controller('ContestController', ContestController);

ContestController.$inject = ['$scope', '$ionicModal', '$firebaseArray', '$stateParams', '$rootScope', '$state',
  'firebaseDataService', '$firebaseObject', 'toastr', '$cordovaCamera'];

/* @ngInject */
function ContestController($scope, $ionicModal, $firebaseArray, $stateParams, $rootScope, $state,
                           firebaseDataService, $firebaseObject, toastr, $cordovaCamera) {
  var vm = this;
  var contestRef = firebaseDataService.contests.child($stateParams.contestID);
  var videosRef = firebaseDataService.contests.child($stateParams.contestID).child('videos');
  vm.id = $stateParams.contestID;

  // contestRef.on('value', function(snapshot) {
  //   vm.contest = snapshot.val();
  // });

  vm.takeImage = takeImage;

  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });

  $rootScope.$ionicGoBack = function (backCount) {
    $state.go('app.home');
  };

  // get the id

  activate();

  ////////////////

  function activate() {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    toastr.success('Contest Controller Activated');
    vm.videos = $firebaseArray(videosRef);
    vm.contest = $firebaseObject(contestRef); // synchronize the object with a three-way data binding

    vm.videos.$loaded()
      .then(function(x) {
        toastr.success('Videos loaded!');

        switch(vm.contest.stage) {
          case 'first':
            $state.go('app.contest.first');
            break;

          case 'semi':
            $state.go('app.contest.semi');
            break;

          case 'finals':
            $state.go('app.contest.finals');
            break;

          default:
            $state.go('app.contest.first');
            break;
        }
      })
      .catch(function(error) {
        toastr.error("Error:", error);
      });
  }

  function takeImage() {
    var options = {
      quality: 80,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 250,
      targetHeight: 250,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.srcImage = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
  }



  // $ionicModal.fromTemplateUrl('app/contest/region.modal.html', {
  //   scope: $scope,
  //   animation: 'slide-in-up'
  // }).then(function (modal) {
  //   vm.modal = modal;
  // });

  // vm.openModal = function() {
  //   vm.modal.show();
  // };
  // vm.closeModal = function() {
  //   vm.modal.hide();
  // };
  // // Cleanup the modal when we're done with it!
  // $scope.$on('$destroy', function() {
  //   vm.modal.remove();
  // });
  // // Execute action on hide modal
  // $scope.$on('modal.hidden', function() {
  //   // Execute action
  // });
  // // Execute action on remove modal
  // $scope.$on('modal.removed', function() {
  //   // Execute action
  // });
}
