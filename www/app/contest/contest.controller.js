/**
 * Created by gadi on 25/10/2016.
 */
angular.module('topthat.contest', ['ionic'])
  .controller('ContestController', ContestController);

ContestController.$inject = ['$scope', '$ionicModal', '$timeout', '$stateParams', '$rootScope', '$state',
  'firebaseDataService', '$firebaseObject'];

/* @ngInject */
function ContestController($scope, $ionicModal, $timeout, $stateParams, $rootScope, $state,
                           firebaseDataService, $firebaseObject) {
  var vm = this;
  var contestRef = firebaseDataService.contests.child($stateParams.contestID);
  vm.id = $stateParams.contestID;

  // contestRef.on('value', function(snapshot) {
  //   vm.contest = snapshot.val();
  // });

  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });

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

    vm.contest = $firebaseObject(contestRef);      // synchronize the object with a three-way data binding

  }

  $rootScope.$ionicGoBack = function (backCount) {
    $state.go('app.home');
  };

  $ionicModal.fromTemplateUrl('app/contest/region.modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    vm.modal = modal;
  });

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
